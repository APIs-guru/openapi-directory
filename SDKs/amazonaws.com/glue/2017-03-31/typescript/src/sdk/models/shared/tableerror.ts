import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";


// TableError
/** 
 * An error record for table operations.
**/
export class TableError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
