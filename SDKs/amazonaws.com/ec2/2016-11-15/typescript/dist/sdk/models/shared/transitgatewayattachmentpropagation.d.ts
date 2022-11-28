import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPropagationStateEnum } from "./transitgatewaypropagationstateenum";
/**
 * Describes a propagation route table.
**/
export declare class TransitGatewayAttachmentPropagation extends SpeakeasyBase {
    state?: TransitGatewayPropagationStateEnum;
    transitGatewayRouteTableId?: string;
}
