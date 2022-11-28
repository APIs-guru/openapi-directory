import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { BgpPeer } from "./bgppeer";
import { RouteFilterPrefix } from "./routefilterprefix";
import { Tag } from "./tag";
import { VirtualInterfaceStateEnum } from "./virtualinterfacestateenum";
/**
 * Information about a virtual interface.
**/
export declare class VirtualInterface extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    amazonSideAsn?: number;
    asn?: number;
    authKey?: string;
    awsDeviceV2?: string;
    awsLogicalDeviceId?: string;
    bgpPeers?: BgpPeer[];
    connectionId?: string;
    customerAddress?: string;
    customerRouterConfig?: string;
    directConnectGatewayId?: string;
    jumboFrameCapable?: boolean;
    location?: string;
    mtu?: number;
    ownerAccount?: string;
    region?: string;
    routeFilterPrefixes?: RouteFilterPrefix[];
    tags?: Tag[];
    virtualGatewayId?: string;
    virtualInterfaceId?: string;
    virtualInterfaceName?: string;
    virtualInterfaceState?: VirtualInterfaceStateEnum;
    virtualInterfaceType?: string;
    vlan?: number;
}
