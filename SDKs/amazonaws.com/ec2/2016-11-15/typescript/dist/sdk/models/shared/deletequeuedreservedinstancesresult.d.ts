import { SpeakeasyBase } from "../../../internal/utils";
import { FailedQueuedPurchaseDeletion } from "./failedqueuedpurchasedeletion";
import { SuccessfulQueuedPurchaseDeletion } from "./successfulqueuedpurchasedeletion";
export declare class DeleteQueuedReservedInstancesResult extends SpeakeasyBase {
    failedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[];
    successfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[];
}
