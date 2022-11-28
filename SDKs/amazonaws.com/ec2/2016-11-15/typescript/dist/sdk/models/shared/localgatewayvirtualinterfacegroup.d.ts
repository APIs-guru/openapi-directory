import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a local gateway virtual interface group.
**/
export declare class LocalGatewayVirtualInterfaceGroup extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    localGatewayVirtualInterfaceIds?: string[];
    ownerId?: string;
    tags?: Tag[];
}
