import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a secondary private IPv4 address for a network interface.
**/
export declare class PrivateIpAddressSpecification extends SpeakeasyBase {
    primary?: boolean;
    privateIpAddress?: string;
}
