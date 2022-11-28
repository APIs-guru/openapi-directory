import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayPropagationStateEnum } from "./transitgatewaypropagationstateenum";
/**
 * Describes a route table propagation.
**/
export declare class TransitGatewayRouteTablePropagation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: TransitGatewayAttachmentResourceTypeEnum;
    state?: TransitGatewayPropagationStateEnum;
    transitGatewayAttachmentId?: string;
}
