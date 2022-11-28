import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartExportLabelsTaskRunXAmzTargetEnum {
    AwsGlueStartExportLabelsTaskRun = "AWSGlue.StartExportLabelsTaskRun"
}


export class StartExportLabelsTaskRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartExportLabelsTaskRunXAmzTargetEnum;
}


export class StartExportLabelsTaskRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartExportLabelsTaskRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartExportLabelsTaskRunRequest;
}


export class StartExportLabelsTaskRunResponse extends SpeakeasyBase {
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
  startExportLabelsTaskRunResponse?: shared.StartExportLabelsTaskRunResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
