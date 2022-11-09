import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageReportExecutionErrorCodeEnum } from "./usagereportexecutionerrorcodeenum";
/**
 * Describes the error that is returned when a usage report can't be generated.
**/
export declare class LastReportGenerationExecutionError extends SpeakeasyBase {
    errorCode?: UsageReportExecutionErrorCodeEnum;
    errorMessage?: string;
}
