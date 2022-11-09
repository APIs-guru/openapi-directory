import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchDeleteImageXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchDeleteImage = "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage"
}


export class BatchDeleteImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDeleteImageXAmzTargetEnum;
}


export class BatchDeleteImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDeleteImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDeleteImageRequest;
}


export class BatchDeleteImageResponse extends SpeakeasyBase {
  @Metadata()
  batchDeleteImageResponse?: shared.BatchDeleteImageResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
