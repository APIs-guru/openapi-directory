import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServiceRoleForAccountHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetServiceRoleForAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetServiceRoleForAccountHeaders;
}


export class GetServiceRoleForAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServiceRoleForAccountResponse?: shared.GetServiceRoleForAccountResponse;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  statusCode: number;
}
