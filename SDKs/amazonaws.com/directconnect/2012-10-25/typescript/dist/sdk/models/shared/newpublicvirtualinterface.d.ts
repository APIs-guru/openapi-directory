import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { RouteFilterPrefix } from "./routefilterprefix";
import { Tag } from "./tag";
/**
 * Information about a public virtual interface.
**/
export declare class NewPublicVirtualInterface extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    asn: number;
    authKey?: string;
    customerAddress?: string;
    routeFilterPrefixes?: RouteFilterPrefix[];
    tags?: Tag[];
    virtualInterfaceName: string;
    vlan: number;
}
