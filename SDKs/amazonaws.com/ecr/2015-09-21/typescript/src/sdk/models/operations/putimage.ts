import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutImageXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutImage = "AmazonEC2ContainerRegistry_V20150921.PutImage"
}


export class PutImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutImageXAmzTargetEnum;
}


export class PutImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutImageRequest;
}


export class PutImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageAlreadyExistsException?: any;

  @Metadata()
  imageDigestDoesNotMatchException?: any;

  @Metadata()
  imageTagAlreadyExistsException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  kmsException?: any;

  @Metadata()
  layersNotFoundException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  putImageResponse?: shared.PutImageResponse;

  @Metadata()
  referencedImagesNotFoundException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
