import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailabilityZone
/** 
 * Describes an Availability Zone in which the cluster is launched.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;
}
