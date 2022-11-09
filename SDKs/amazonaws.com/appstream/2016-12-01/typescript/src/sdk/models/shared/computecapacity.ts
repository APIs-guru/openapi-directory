import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComputeCapacity
/** 
 * Describes the capacity for a fleet.
**/
export class ComputeCapacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredInstances" })
  desiredInstances: number;
}
