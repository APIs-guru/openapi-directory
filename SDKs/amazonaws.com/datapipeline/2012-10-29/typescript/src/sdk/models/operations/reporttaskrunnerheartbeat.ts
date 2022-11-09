import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReportTaskRunnerHeartbeatXAmzTargetEnum {
    DataPipelineReportTaskRunnerHeartbeat = "DataPipeline.ReportTaskRunnerHeartbeat"
}


export class ReportTaskRunnerHeartbeatHeaders extends SpeakeasyBase {
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
  xAmzTarget: ReportTaskRunnerHeartbeatXAmzTargetEnum;
}


export class ReportTaskRunnerHeartbeatRequest extends SpeakeasyBase {
  @Metadata()
  headers: ReportTaskRunnerHeartbeatHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReportTaskRunnerHeartbeatInput;
}


export class ReportTaskRunnerHeartbeatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  reportTaskRunnerHeartbeatOutput?: shared.ReportTaskRunnerHeartbeatOutput;

  @Metadata()
  statusCode: number;
}
