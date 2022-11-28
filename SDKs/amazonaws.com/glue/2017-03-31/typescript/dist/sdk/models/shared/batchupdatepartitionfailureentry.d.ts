import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * Contains information about a batch update partition error.
**/
export declare class BatchUpdatePartitionFailureEntry extends SpeakeasyBase {
    errorDetail?: ErrorDetail;
    partitionValueList?: string[];
}
