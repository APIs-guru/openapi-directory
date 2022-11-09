import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ReportTaskProgressXAmzTargetEnum {
    DataPipelineReportTaskProgress = "DataPipeline.ReportTaskProgress"
}
export declare class ReportTaskProgressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReportTaskProgressXAmzTargetEnum;
}
export declare class ReportTaskProgressRequest extends SpeakeasyBase {
    headers: ReportTaskProgressHeaders;
    request: shared.ReportTaskProgressInput;
}
export declare class ReportTaskProgressResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    reportTaskProgressOutput?: shared.ReportTaskProgressOutput;
    statusCode: number;
    taskNotFoundException?: any;
}
