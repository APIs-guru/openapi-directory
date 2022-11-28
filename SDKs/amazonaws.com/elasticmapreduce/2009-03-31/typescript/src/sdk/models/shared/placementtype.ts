import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlacementType
/** 
 * The Amazon EC2 Availability Zone configuration of the cluster (job flow).
**/
export class PlacementType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];
}
