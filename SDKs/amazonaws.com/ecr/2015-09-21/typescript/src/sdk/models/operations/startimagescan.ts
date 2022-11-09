import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartImageScanXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921StartImageScan = "AmazonEC2ContainerRegistry_V20150921.StartImageScan"
}


export class StartImageScanHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartImageScanXAmzTargetEnum;
}


export class StartImageScanRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartImageScanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartImageScanRequest;
}


export class StartImageScanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageNotFoundException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  startImageScanResponse?: shared.StartImageScanResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedImageTypeException?: any;
}
