import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { Tag } from "./tag";
/**
 * Information about a private virtual interface.
**/
export declare class NewPrivateVirtualInterface extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    asn: number;
    authKey?: string;
    customerAddress?: string;
    directConnectGatewayId?: string;
    mtu?: number;
    tags?: Tag[];
    virtualGatewayId?: string;
    virtualInterfaceName: string;
    vlan: number;
}
