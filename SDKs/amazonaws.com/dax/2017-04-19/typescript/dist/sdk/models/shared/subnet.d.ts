import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.
**/
export declare class Subnet extends SpeakeasyBase {
    subnetAvailabilityZone?: string;
    subnetIdentifier?: string;
}
