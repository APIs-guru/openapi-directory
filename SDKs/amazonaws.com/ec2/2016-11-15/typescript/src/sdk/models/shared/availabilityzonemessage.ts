import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailabilityZoneMessage
/** 
 * Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.
**/
export class AvailabilityZoneMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
