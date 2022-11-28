import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



// ColumnError
/** 
 * Encapsulates a column name that failed and the reason for failure.
**/
export class ColumnError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnName" })
  columnName?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: ErrorDetail;
}
