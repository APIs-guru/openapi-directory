import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * An error record for table operations.
**/
export declare class TableError extends SpeakeasyBase {
    errorDetail?: ErrorDetail;
    tableName?: string;
}
