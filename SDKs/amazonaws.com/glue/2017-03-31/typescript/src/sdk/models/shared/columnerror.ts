import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";


// ColumnError
/** 
 * Encapsulates a column name that failed and the reason for failure.
**/
export class ColumnError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnName" })
  columnName?: string;

  @Metadata({ data: "json, name=Error" })
  error?: ErrorDetail;
}
