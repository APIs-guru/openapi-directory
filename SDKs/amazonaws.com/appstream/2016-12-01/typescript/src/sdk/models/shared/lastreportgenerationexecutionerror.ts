import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageReportExecutionErrorCodeEnum } from "./usagereportexecutionerrorcodeenum";



// LastReportGenerationExecutionError
/** 
 * Describes the error that is returned when a usage report can't be generated.
**/
export class LastReportGenerationExecutionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: UsageReportExecutionErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
