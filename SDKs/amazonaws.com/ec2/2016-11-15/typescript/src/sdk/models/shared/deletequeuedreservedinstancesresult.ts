import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedQueuedPurchaseDeletion } from "./failedqueuedpurchasedeletion";
import { SuccessfulQueuedPurchaseDeletion } from "./successfulqueuedpurchasedeletion";



export class DeleteQueuedReservedInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FailedQueuedPurchaseDeletion })
  failedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[];

  @SpeakeasyMetadata({ elemType: SuccessfulQueuedPurchaseDeletion })
  successfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[];
}
