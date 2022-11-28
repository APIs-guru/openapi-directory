import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CompleteLayerUploadXAmzTargetEnum {
    SpencerFrontendServiceCompleteLayerUpload = "SpencerFrontendService.CompleteLayerUpload"
}


export class CompleteLayerUploadHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CompleteLayerUploadXAmzTargetEnum;
}


export class CompleteLayerUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CompleteLayerUploadHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CompleteLayerUploadRequest;
}


export class CompleteLayerUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completeLayerUploadResponse?: shared.CompleteLayerUploadResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emptyUploadException?: any;

  @SpeakeasyMetadata()
  invalidLayerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  layerAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  layerPartTooSmallException?: any;

  @SpeakeasyMetadata()
  registryNotFoundException?: any;

  @SpeakeasyMetadata()
  repositoryNotFoundException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedCommandException?: any;

  @SpeakeasyMetadata()
  uploadNotFoundException?: any;
}
