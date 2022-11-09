import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePermissionXAmzTargetEnum {
    AcmPrivateCaCreatePermission = "ACMPrivateCA.CreatePermission"
}


export class CreatePermissionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePermissionXAmzTargetEnum;
}


export class CreatePermissionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePermissionRequest;
}


export class CreatePermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  permissionAlreadyExistsException?: any;

  @Metadata()
  requestFailedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
