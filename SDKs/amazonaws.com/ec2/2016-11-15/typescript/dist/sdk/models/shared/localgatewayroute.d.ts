import { SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayRouteStateEnum } from "./localgatewayroutestateenum";
import { LocalGatewayRouteTypeEnum } from "./localgatewayroutetypeenum";
/**
 * Describes a route for a local gateway route table.
**/
export declare class LocalGatewayRoute extends SpeakeasyBase {
    destinationCidrBlock?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    ownerId?: string;
    state?: LocalGatewayRouteStateEnum;
    type?: LocalGatewayRouteTypeEnum;
}
