import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastDomainOptions } from "./transitgatewaymulticastdomainoptions";
import { TransitGatewayMulticastDomainStateEnum } from "./transitgatewaymulticastdomainstateenum";
import { Tag } from "./tag";
/**
 * Describes the transit gateway multicast domain.
**/
export declare class TransitGatewayMulticastDomain extends SpeakeasyBase {
    creationTime?: Date;
    options?: TransitGatewayMulticastDomainOptions;
    ownerId?: string;
    state?: TransitGatewayMulticastDomainStateEnum;
    tags?: Tag[];
    transitGatewayId?: string;
    transitGatewayMulticastDomainArn?: string;
    transitGatewayMulticastDomainId?: string;
}
