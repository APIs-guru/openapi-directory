import { SpeakeasyBase } from "../../../internal/utils";
import { PeeringTgwInfo } from "./peeringtgwinfo";
import { TransitGatewayAttachmentStateEnum } from "./transitgatewayattachmentstateenum";
import { PeeringAttachmentStatus } from "./peeringattachmentstatus";
import { Tag } from "./tag";
/**
 * Describes the transit gateway peering attachment.
**/
export declare class TransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: PeeringTgwInfo;
    creationTime?: Date;
    requesterTgwInfo?: PeeringTgwInfo;
    state?: TransitGatewayAttachmentStateEnum;
    status?: PeeringAttachmentStatus;
    tags?: Tag[];
    transitGatewayAttachmentId?: string;
}
