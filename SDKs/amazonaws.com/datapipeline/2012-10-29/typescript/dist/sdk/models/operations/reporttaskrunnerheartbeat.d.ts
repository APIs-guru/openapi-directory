import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ReportTaskRunnerHeartbeatXAmzTargetEnum {
    DataPipelineReportTaskRunnerHeartbeat = "DataPipeline.ReportTaskRunnerHeartbeat"
}
export declare class ReportTaskRunnerHeartbeatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReportTaskRunnerHeartbeatXAmzTargetEnum;
}
export declare class ReportTaskRunnerHeartbeatRequest extends SpeakeasyBase {
    headers: ReportTaskRunnerHeartbeatHeaders;
    request: shared.ReportTaskRunnerHeartbeatInput;
}
export declare class ReportTaskRunnerHeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    reportTaskRunnerHeartbeatOutput?: shared.ReportTaskRunnerHeartbeatOutput;
    statusCode: number;
}
