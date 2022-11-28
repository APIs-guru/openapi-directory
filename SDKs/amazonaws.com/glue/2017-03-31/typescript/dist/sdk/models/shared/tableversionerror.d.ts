import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * An error record for table-version operations.
**/
export declare class TableVersionError extends SpeakeasyBase {
    errorDetail?: ErrorDetail;
    tableName?: string;
    versionId?: string;
}
