import { SpeakeasyBase } from "../../../internal/utils";
import { CarrierGatewayStateEnum } from "./carriergatewaystateenum";
import { Tag } from "./tag";
/**
 * Describes a carrier gateway.
**/
export declare class CarrierGateway extends SpeakeasyBase {
    carrierGatewayId?: string;
    ownerId?: string;
    state?: CarrierGatewayStateEnum;
    tags?: Tag[];
    vpcId?: string;
}
