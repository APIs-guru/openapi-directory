import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddAvailabilityZonesOutput
/** 
 * Contains the output of EnableAvailabilityZonesForLoadBalancer.
**/
export class AddAvailabilityZonesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZones?: string[];
}
