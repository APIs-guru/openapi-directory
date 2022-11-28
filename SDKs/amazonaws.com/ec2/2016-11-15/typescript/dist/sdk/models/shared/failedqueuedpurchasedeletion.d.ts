import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteQueuedReservedInstancesError } from "./deletequeuedreservedinstanceserror";
/**
 * Describes a Reserved Instance whose queued purchase was not deleted.
**/
export declare class FailedQueuedPurchaseDeletion extends SpeakeasyBase {
    error?: DeleteQueuedReservedInstancesError;
    reservedInstancesId?: string;
}
