import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { Tag } from "./tag";
/**
 * Information about a private virtual interface to be provisioned on a connection.
**/
export declare class NewPrivateVirtualInterfaceAllocation extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    asn: number;
    authKey?: string;
    customerAddress?: string;
    mtu?: number;
    tags?: Tag[];
    virtualInterfaceName: string;
    vlan: number;
}
