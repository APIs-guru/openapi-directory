import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ResumeWorkflowRunXAmzTargetEnum {
    AwsGlueResumeWorkflowRun = "AWSGlue.ResumeWorkflowRun"
}


export class ResumeWorkflowRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ResumeWorkflowRunXAmzTargetEnum;
}


export class ResumeWorkflowRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ResumeWorkflowRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ResumeWorkflowRunRequest;
}


export class ResumeWorkflowRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentRunsExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  illegalWorkflowStateException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  operationTimeoutException?: any;

  @SpeakeasyMetadata()
  resumeWorkflowRunResponse?: shared.ResumeWorkflowRunResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
