import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartPipelineExecutionXAmzTargetEnum {
    CodePipeline20150709StartPipelineExecution = "CodePipeline_20150709.StartPipelineExecution"
}


export class StartPipelineExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartPipelineExecutionXAmzTargetEnum;
}


export class StartPipelineExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartPipelineExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartPipelineExecutionInput;
}


export class StartPipelineExecutionResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  startPipelineExecutionOutput?: shared.StartPipelineExecutionOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
