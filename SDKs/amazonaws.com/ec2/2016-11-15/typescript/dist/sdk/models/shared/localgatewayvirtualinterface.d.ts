import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a local gateway virtual interface.
**/
export declare class LocalGatewayVirtualInterface extends SpeakeasyBase {
    localAddress?: string;
    localBgpAsn?: number;
    localGatewayId?: string;
    localGatewayVirtualInterfaceId?: string;
    ownerId?: string;
    peerAddress?: string;
    peerBgpAsn?: number;
    tags?: Tag[];
    vlan?: number;
}
