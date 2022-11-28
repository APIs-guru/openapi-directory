import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";
/**
 * Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
**/
export declare class InternetGatewayAttachment extends SpeakeasyBase {
    state?: AttachmentStatusEnum;
    vpcId?: string;
}
