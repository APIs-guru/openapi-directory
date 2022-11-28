import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an address range of an IPv4 address pool.
**/
export declare class PublicIpv4PoolRange extends SpeakeasyBase {
    addressCount?: number;
    availableAddressCount?: number;
    firstAddress?: string;
    lastAddress?: string;
}
