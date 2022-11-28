import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailabilityZone
/** 
 * Information about an Availability Zone.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;
}
