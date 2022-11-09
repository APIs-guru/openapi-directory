import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum InitiateLayerUploadXAmzTargetEnum {
    SpencerFrontendServiceInitiateLayerUpload = "SpencerFrontendService.InitiateLayerUpload"
}


export class InitiateLayerUploadHeaders extends SpeakeasyBase {
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
  xAmzTarget: InitiateLayerUploadXAmzTargetEnum;
}


export class InitiateLayerUploadRequest extends SpeakeasyBase {
  @Metadata()
  headers: InitiateLayerUploadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InitiateLayerUploadRequest;
}


export class InitiateLayerUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  initiateLayerUploadResponse?: shared.InitiateLayerUploadResponse;

  @Metadata()
  invalidParameterException?: any;

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
}
