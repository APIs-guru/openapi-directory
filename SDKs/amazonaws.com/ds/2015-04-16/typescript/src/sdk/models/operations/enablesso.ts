import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnableSsoXAmzTargetEnum {
    DirectoryService20150416EnableSso = "DirectoryService_20150416.EnableSso"
}


export class EnableSsoHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: EnableSsoXAmzTargetEnum;
}


export class EnableSsoRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableSsoHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnableSsoRequest;
}


export class EnableSsoResponse extends SpeakeasyBase {
  @Metadata()
  authenticationFailedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  enableSsoResult?: Map<string, any>;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  insufficientPermissionsException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
