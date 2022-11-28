import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstance } from "./scheduledinstance";



// PurchaseScheduledInstancesResult
/** 
 * Contains the output of PurchaseScheduledInstances.
**/
export class PurchaseScheduledInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ScheduledInstance })
  scheduledInstanceSet?: ScheduledInstance[];
}
