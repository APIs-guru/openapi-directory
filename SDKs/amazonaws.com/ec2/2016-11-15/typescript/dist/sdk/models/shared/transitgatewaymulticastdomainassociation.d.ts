import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { SubnetAssociation } from "./subnetassociation";
/**
 * Describes the resources associated with the transit gateway multicast domain.
**/
export declare class TransitGatewayMulticastDomainAssociation extends SpeakeasyBase {
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: TransitGatewayAttachmentResourceTypeEnum;
    subnet?: SubnetAssociation;
    transitGatewayAttachmentId?: string;
}
