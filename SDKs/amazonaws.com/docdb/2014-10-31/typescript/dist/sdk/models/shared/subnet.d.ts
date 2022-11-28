import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
/**
 *  Detailed information about a subnet.
**/
export declare class Subnet extends SpeakeasyBase {
    subnetAvailabilityZone?: AvailabilityZone;
    subnetIdentifier?: string;
    subnetStatus?: string;
}
