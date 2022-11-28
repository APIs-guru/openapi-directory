import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayPropagationStateEnum } from "./transitgatewaypropagationstateenum";
/**
 * Describes route propagation.
**/
export declare class TransitGatewayPropagation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: TransitGatewayAttachmentResourceTypeEnum;
    state?: TransitGatewayPropagationStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId?: string;
}
