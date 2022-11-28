import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceCapacity } from "./instancecapacity";



// AvailableCapacity
/** 
 * The capacity information for instances that can be launched onto the Dedicated Host. 
**/
export class AvailableCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceCapacity })
  availableInstanceCapacity?: InstanceCapacity[];

  @SpeakeasyMetadata()
  availableVCpus?: number;
}
