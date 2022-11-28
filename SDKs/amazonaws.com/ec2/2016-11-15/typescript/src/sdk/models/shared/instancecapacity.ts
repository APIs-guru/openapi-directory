import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceCapacity
/** 
 * Information about the number of instances that can be launched onto the Dedicated Host.
**/
export class InstanceCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availableCapacity?: number;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  totalCapacity?: number;
}
