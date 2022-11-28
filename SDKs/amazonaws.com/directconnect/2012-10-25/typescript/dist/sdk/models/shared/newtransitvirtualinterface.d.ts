import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { Tag } from "./tag";
/**
 * Information about a transit virtual interface.
**/
export declare class NewTransitVirtualInterface extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    asn?: number;
    authKey?: string;
    customerAddress?: string;
    directConnectGatewayId?: string;
    mtu?: number;
    tags?: Tag[];
    virtualInterfaceName?: string;
    vlan?: number;
}
