import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputeCapacity
/** 
 * Describes the capacity for a fleet.
**/
export class ComputeCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DesiredInstances" })
  desiredInstances: number;
}
