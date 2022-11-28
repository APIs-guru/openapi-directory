import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartMlLabelingSetGenerationTaskRunXAmzTargetEnum {
    AwsGlueStartMlLabelingSetGenerationTaskRun = "AWSGlue.StartMLLabelingSetGenerationTaskRun"
}


export class StartMlLabelingSetGenerationTaskRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartMlLabelingSetGenerationTaskRunXAmzTargetEnum;
}


export class StartMlLabelingSetGenerationTaskRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartMlLabelingSetGenerationTaskRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartMlLabelingSetGenerationTaskRunRequest;
}


export class StartMlLabelingSetGenerationTaskRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentRunsExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  operationTimeoutException?: any;

  @SpeakeasyMetadata()
  startMlLabelingSetGenerationTaskRunResponse?: shared.StartMlLabelingSetGenerationTaskRunResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
