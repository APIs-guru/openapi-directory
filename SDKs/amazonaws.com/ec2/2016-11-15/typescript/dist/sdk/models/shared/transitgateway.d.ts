import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayOptions } from "./transitgatewayoptions";
import { TransitGatewayStateEnum } from "./transitgatewaystateenum";
import { Tag } from "./tag";
/**
 * Describes a transit gateway.
**/
export declare class TransitGateway extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    options?: TransitGatewayOptions;
    ownerId?: string;
    state?: TransitGatewayStateEnum;
    tags?: Tag[];
    transitGatewayArn?: string;
    transitGatewayId?: string;
}
