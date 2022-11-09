import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartWorkflowRunXAmzTargetEnum {
    AwsGlueStartWorkflowRun = "AWSGlue.StartWorkflowRun"
}


export class StartWorkflowRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartWorkflowRunXAmzTargetEnum;
}


export class StartWorkflowRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartWorkflowRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartWorkflowRunRequest;
}


export class StartWorkflowRunResponse extends SpeakeasyBase {
  @Metadata()
  concurrentRunsExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  resourceNumberLimitExceededException?: any;

  @Metadata()
  startWorkflowRunResponse?: shared.StartWorkflowRunResponse;

  @Metadata()
  statusCode: number;
}
