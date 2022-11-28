import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPrefixListReferenceStateEnum } from "./transitgatewayprefixlistreferencestateenum";
import { TransitGatewayPrefixListAttachment } from "./transitgatewayprefixlistattachment";
/**
 * Describes a prefix list reference.
**/
export declare class TransitGatewayPrefixListReference extends SpeakeasyBase {
    blackhole?: boolean;
    prefixListId?: string;
    prefixListOwnerId?: string;
    state?: TransitGatewayPrefixListReferenceStateEnum;
    transitGatewayAttachment?: TransitGatewayPrefixListAttachment;
    transitGatewayRouteTableId?: string;
}
