import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchGetImageXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchGetImage = "AmazonEC2ContainerRegistry_V20150921.BatchGetImage"
}


export class BatchGetImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetImageXAmzTargetEnum;
}


export class BatchGetImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetImageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetImageRequest;
}


export class BatchGetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetImageResponse?: shared.BatchGetImageResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  repositoryNotFoundException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
