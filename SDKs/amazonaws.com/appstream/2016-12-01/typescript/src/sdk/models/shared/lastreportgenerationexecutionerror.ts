import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageReportExecutionErrorCodeEnum } from "./usagereportexecutionerrorcodeenum";


// LastReportGenerationExecutionError
/** 
 * Describes the error that is returned when a usage report can't be generated.
**/
export class LastReportGenerationExecutionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: UsageReportExecutionErrorCodeEnum;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
