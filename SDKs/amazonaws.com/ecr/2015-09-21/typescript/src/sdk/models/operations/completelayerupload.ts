import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CompleteLayerUploadXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921CompleteLayerUpload = "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload"
}


export class CompleteLayerUploadHeaders extends SpeakeasyBase {
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
  xAmzTarget: CompleteLayerUploadXAmzTargetEnum;
}


export class CompleteLayerUploadRequest extends SpeakeasyBase {
  @Metadata()
  headers: CompleteLayerUploadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CompleteLayerUploadRequest;
}


export class CompleteLayerUploadResponse extends SpeakeasyBase {
  @Metadata()
  completeLayerUploadResponse?: shared.CompleteLayerUploadResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  emptyUploadException?: any;

  @Metadata()
  invalidLayerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  kmsException?: any;

  @Metadata()
  layerAlreadyExistsException?: any;

  @Metadata()
  layerPartTooSmallException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadNotFoundException?: any;
}
