import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { SubnetAssociation } from "./subnetassociation";
/**
 * Describes the multicast domain associations.
**/
export declare class TransitGatewayMulticastDomainAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: TransitGatewayAttachmentResourceTypeEnum;
    subnets?: SubnetAssociation[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
}
