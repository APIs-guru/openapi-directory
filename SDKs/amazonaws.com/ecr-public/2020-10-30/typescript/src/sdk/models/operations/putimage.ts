import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutImageXAmzTargetEnum {
    SpencerFrontendServicePutImage = "SpencerFrontendService.PutImage"
}


export class PutImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutImageXAmzTargetEnum;
}


export class PutImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutImageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutImageRequest;
}


export class PutImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  imageDigestDoesNotMatchException?: any;

  @SpeakeasyMetadata()
  imageTagAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  layersNotFoundException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  putImageResponse?: shared.PutImageResponse;

  @SpeakeasyMetadata()
  referencedImagesNotFoundException?: any;

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
}
