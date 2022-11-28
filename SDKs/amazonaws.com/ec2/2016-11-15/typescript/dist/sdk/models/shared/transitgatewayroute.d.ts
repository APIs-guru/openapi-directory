import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRouteStateEnum } from "./transitgatewayroutestateenum";
import { TransitGatewayRouteAttachment } from "./transitgatewayrouteattachment";
import { TransitGatewayRouteTypeEnum } from "./transitgatewayroutetypeenum";
/**
 * Describes a route for a transit gateway route table.
**/
export declare class TransitGatewayRoute extends SpeakeasyBase {
    destinationCidrBlock?: string;
    prefixListId?: string;
    state?: TransitGatewayRouteStateEnum;
    transitGatewayAttachments?: TransitGatewayRouteAttachment[];
    type?: TransitGatewayRouteTypeEnum;
}
