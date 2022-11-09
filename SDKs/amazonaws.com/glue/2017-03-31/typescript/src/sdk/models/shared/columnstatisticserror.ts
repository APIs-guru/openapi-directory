import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnStatistics } from "./columnstatistics";
import { ErrorDetail } from "./errordetail";


// ColumnStatisticsError
/** 
 * Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.
**/
export class ColumnStatisticsError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnStatistics" })
  columnStatistics?: ColumnStatistics;

  @Metadata({ data: "json, name=Error" })
  error?: ErrorDetail;
}
