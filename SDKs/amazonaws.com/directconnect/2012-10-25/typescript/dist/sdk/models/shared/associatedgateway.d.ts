import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayTypeEnum } from "./gatewaytypeenum";
/**
 * Information about the associated gateway.
**/
export declare class AssociatedGateway extends SpeakeasyBase {
    id?: string;
    ownerAccount?: string;
    region?: string;
    type?: GatewayTypeEnum;
}
