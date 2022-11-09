import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RetryStageExecutionXAmzTargetEnum {
    CodePipeline20150709RetryStageExecution = "CodePipeline_20150709.RetryStageExecution"
}


export class RetryStageExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: RetryStageExecutionXAmzTargetEnum;
}


export class RetryStageExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: RetryStageExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RetryStageExecutionInput;
}


export class RetryStageExecutionResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notLatestPipelineExecutionException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  retryStageExecutionOutput?: shared.RetryStageExecutionOutput;

  @Metadata()
  stageNotFoundException?: any;

  @Metadata()
  stageNotRetryableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
