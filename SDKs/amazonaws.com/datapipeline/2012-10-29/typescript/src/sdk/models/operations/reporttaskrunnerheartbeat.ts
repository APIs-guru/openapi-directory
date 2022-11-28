import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReportTaskRunnerHeartbeatXAmzTargetEnum {
    DataPipelineReportTaskRunnerHeartbeat = "DataPipeline.ReportTaskRunnerHeartbeat"
}


export class ReportTaskRunnerHeartbeatHeaders extends SpeakeasyBase {
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
  xAmzTarget: ReportTaskRunnerHeartbeatXAmzTargetEnum;
}


export class ReportTaskRunnerHeartbeatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ReportTaskRunnerHeartbeatHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportTaskRunnerHeartbeatInput;
}


export class ReportTaskRunnerHeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceError?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  reportTaskRunnerHeartbeatOutput?: shared.ReportTaskRunnerHeartbeatOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
