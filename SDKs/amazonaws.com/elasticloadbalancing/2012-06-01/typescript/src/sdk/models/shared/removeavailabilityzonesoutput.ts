import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveAvailabilityZonesOutput
/** 
 * Contains the output for DisableAvailabilityZonesForLoadBalancer.
**/
export class RemoveAvailabilityZonesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZones?: string[];
}
