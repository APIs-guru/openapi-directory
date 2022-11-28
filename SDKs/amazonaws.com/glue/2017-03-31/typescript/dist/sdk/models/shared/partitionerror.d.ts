import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * Contains information about a partition error.
**/
export declare class PartitionError extends SpeakeasyBase {
    errorDetail?: ErrorDetail;
    partitionValues?: string[];
}
