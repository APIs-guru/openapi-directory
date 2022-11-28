import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuccessfulQueuedPurchaseDeletion
/** 
 * Describes a Reserved Instance whose queued purchase was successfully deleted.
**/
export class SuccessfulQueuedPurchaseDeletion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservedInstancesId?: string;
}
