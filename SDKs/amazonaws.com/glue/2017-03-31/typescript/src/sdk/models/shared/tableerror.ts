import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



// TableError
/** 
 * An error record for table operations.
**/
export class TableError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
