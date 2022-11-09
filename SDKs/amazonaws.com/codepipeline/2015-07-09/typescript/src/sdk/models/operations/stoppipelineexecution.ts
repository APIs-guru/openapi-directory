import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopPipelineExecutionXAmzTargetEnum {
    CodePipeline20150709StopPipelineExecution = "CodePipeline_20150709.StopPipelineExecution"
}


export class StopPipelineExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopPipelineExecutionXAmzTargetEnum;
}


export class StopPipelineExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopPipelineExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopPipelineExecutionInput;
}


export class StopPipelineExecutionResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicatedStopRequestException?: any;

  @Metadata()
  pipelineExecutionNotStoppableException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopPipelineExecutionOutput?: shared.StopPipelineExecutionOutput;

  @Metadata()
  validationException?: any;
}
