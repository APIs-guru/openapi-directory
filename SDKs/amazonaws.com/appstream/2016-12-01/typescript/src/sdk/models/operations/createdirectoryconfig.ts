import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDirectoryConfigXAmzTargetEnum {
    PhotonAdminProxyServiceCreateDirectoryConfig = "PhotonAdminProxyService.CreateDirectoryConfig"
}


export class CreateDirectoryConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDirectoryConfigXAmzTargetEnum;
}


export class CreateDirectoryConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDirectoryConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDirectoryConfigRequest;
}


export class CreateDirectoryConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDirectoryConfigResult?: shared.CreateDirectoryConfigResult;

  @Metadata()
  invalidAccountStatusException?: any;

  @Metadata()
  invalidRoleException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
