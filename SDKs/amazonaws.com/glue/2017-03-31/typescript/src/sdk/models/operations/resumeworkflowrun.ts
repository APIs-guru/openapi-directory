import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResumeWorkflowRunXAmzTargetEnum {
    AwsGlueResumeWorkflowRun = "AWSGlue.ResumeWorkflowRun"
}


export class ResumeWorkflowRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResumeWorkflowRunXAmzTargetEnum;
}


export class ResumeWorkflowRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResumeWorkflowRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResumeWorkflowRunRequest;
}


export class ResumeWorkflowRunResponse extends SpeakeasyBase {
  @Metadata()
  concurrentRunsExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  illegalWorkflowStateException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  resumeWorkflowRunResponse?: shared.ResumeWorkflowRunResponse;

  @Metadata()
  statusCode: number;
}
