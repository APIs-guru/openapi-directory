import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityOptionsStatus } from "./availabilityoptionsstatus";
/**
 * The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request.
**/
export declare class DescribeAvailabilityOptionsResponse extends SpeakeasyBase {
    availabilityOptions?: AvailabilityOptionsStatus;
}
