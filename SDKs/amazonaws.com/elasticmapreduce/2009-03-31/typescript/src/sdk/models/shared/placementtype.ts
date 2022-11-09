import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlacementType
/** 
 * The Amazon EC2 Availability Zone configuration of the cluster (job flow).
**/
export class PlacementType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];
}
