import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * Encapsulates a column name that failed and the reason for failure.
**/
export declare class ColumnError extends SpeakeasyBase {
    columnName?: string;
    error?: ErrorDetail;
}
