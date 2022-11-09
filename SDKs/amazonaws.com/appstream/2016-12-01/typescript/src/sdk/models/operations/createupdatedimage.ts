import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateUpdatedImageXAmzTargetEnum {
    PhotonAdminProxyServiceCreateUpdatedImage = "PhotonAdminProxyService.CreateUpdatedImage"
}


export class CreateUpdatedImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateUpdatedImageXAmzTargetEnum;
}


export class CreateUpdatedImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUpdatedImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateUpdatedImageRequest;
}


export class CreateUpdatedImageResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createUpdatedImageResult?: shared.CreateUpdatedImageResult;

  @Metadata()
  incompatibleImageException?: any;

  @Metadata()
  invalidAccountStatusException?: any;

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
