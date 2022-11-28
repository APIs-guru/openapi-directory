import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { Tag } from "./tag";
/**
 * Information about a transit virtual interface to be provisioned on a connection.
**/
export declare class NewTransitVirtualInterfaceAllocation extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    asn?: number;
    authKey?: string;
    customerAddress?: string;
    mtu?: number;
    tags?: Tag[];
    virtualInterfaceName?: string;
    vlan?: number;
}
