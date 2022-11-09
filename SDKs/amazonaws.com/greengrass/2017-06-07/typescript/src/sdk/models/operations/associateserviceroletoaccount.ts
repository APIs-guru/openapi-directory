import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateServiceRoleToAccountHeaders extends SpeakeasyBase {
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


export class AssociateServiceRoleToAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}


export class AssociateServiceRoleToAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateServiceRoleToAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateServiceRoleToAccountRequestBody;
}


export class AssociateServiceRoleToAccountResponse extends SpeakeasyBase {
  @Metadata()
  associateServiceRoleToAccountResponse?: shared.AssociateServiceRoleToAccountResponse;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  statusCode: number;
}
