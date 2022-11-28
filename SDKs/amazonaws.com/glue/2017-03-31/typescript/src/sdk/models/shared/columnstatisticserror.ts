import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatistics } from "./columnstatistics";
import { ErrorDetail } from "./errordetail";



// ColumnStatisticsError
/** 
 * Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.
**/
export class ColumnStatisticsError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnStatistics" })
  columnStatistics?: ColumnStatistics;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: ErrorDetail;
}
