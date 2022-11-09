import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UploadLayerPartXAmzTargetEnum {
    SpencerFrontendServiceUploadLayerPart = "SpencerFrontendService.UploadLayerPart"
}


export class UploadLayerPartHeaders extends SpeakeasyBase {
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
  xAmzTarget: UploadLayerPartXAmzTargetEnum;
}


export class UploadLayerPartRequest extends SpeakeasyBase {
  @Metadata()
  headers: UploadLayerPartHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UploadLayerPartRequest;
}


export class UploadLayerPartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidLayerPartException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  registryNotFoundException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedCommandException?: any;

  @Metadata()
  uploadLayerPartResponse?: shared.UploadLayerPartResponse;

  @Metadata()
  uploadNotFoundException?: any;
}
