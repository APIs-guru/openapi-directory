import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteQueuedReservedInstancesError } from "./deletequeuedreservedinstanceserror";



// FailedQueuedPurchaseDeletion
/** 
 * Describes a Reserved Instance whose queued purchase was not deleted.
**/
export class FailedQueuedPurchaseDeletion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: DeleteQueuedReservedInstancesError;

  @SpeakeasyMetadata()
  reservedInstancesId?: string;
}
