import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a customer gateway.
**/
export declare class CustomerGateway extends SpeakeasyBase {
    bgpAsn?: string;
    certificateArn?: string;
    customerGatewayId?: string;
    deviceName?: string;
    ipAddress?: string;
    state?: string;
    tags?: Tag[];
    type?: string;
}
