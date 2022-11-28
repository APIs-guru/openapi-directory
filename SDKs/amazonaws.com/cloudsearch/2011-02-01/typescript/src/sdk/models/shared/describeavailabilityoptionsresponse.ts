import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityOptionsStatus } from "./availabilityoptionsstatus";



// DescribeAvailabilityOptionsResponse
/** 
 * The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. 
**/
export class DescribeAvailabilityOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityOptions?: AvailabilityOptionsStatus;
}
