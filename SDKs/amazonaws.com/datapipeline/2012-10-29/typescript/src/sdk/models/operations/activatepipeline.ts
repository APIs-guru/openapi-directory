import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ActivatePipelineXAmzTargetEnum {
    DataPipelineActivatePipeline = "DataPipeline.ActivatePipeline"
}


export class ActivatePipelineHeaders extends SpeakeasyBase {
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
  xAmzTarget: ActivatePipelineXAmzTargetEnum;
}


export class ActivatePipelineRequest extends SpeakeasyBase {
  @Metadata()
  headers: ActivatePipelineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ActivatePipelineInput;
}


export class ActivatePipelineResponse extends SpeakeasyBase {
  @Metadata()
  activatePipelineOutput?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  pipelineDeletedException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
