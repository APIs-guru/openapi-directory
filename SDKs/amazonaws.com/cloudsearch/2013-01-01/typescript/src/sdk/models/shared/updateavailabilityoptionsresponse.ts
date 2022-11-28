import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityOptionsStatus } from "./availabilityoptionsstatus";



// UpdateAvailabilityOptionsResponse
/** 
 * The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. 
**/
export class UpdateAvailabilityOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityOptions?: AvailabilityOptionsStatus;
}
