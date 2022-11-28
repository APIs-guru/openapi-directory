import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipTypeEnum } from "./membershiptypeenum";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
/**
 * Describes the transit gateway multicast group resources.
**/
export declare class TransitGatewayMulticastGroup extends SpeakeasyBase {
    groupIpAddress?: string;
    groupMember?: boolean;
    groupSource?: boolean;
    memberType?: MembershipTypeEnum;
    networkInterfaceId?: string;
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: TransitGatewayAttachmentResourceTypeEnum;
    sourceType?: MembershipTypeEnum;
    subnetId?: string;
    transitGatewayAttachmentId?: string;
}
