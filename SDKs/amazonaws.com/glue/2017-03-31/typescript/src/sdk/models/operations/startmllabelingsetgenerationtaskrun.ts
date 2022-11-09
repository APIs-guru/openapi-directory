import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartMlLabelingSetGenerationTaskRunXAmzTargetEnum {
    AwsGlueStartMlLabelingSetGenerationTaskRun = "AWSGlue.StartMLLabelingSetGenerationTaskRun"
}


export class StartMlLabelingSetGenerationTaskRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartMlLabelingSetGenerationTaskRunXAmzTargetEnum;
}


export class StartMlLabelingSetGenerationTaskRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartMlLabelingSetGenerationTaskRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartMlLabelingSetGenerationTaskRunRequest;
}


export class StartMlLabelingSetGenerationTaskRunResponse extends SpeakeasyBase {
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
  startMlLabelingSetGenerationTaskRunResponse?: shared.StartMlLabelingSetGenerationTaskRunResponse;

  @Metadata()
  statusCode: number;
}
