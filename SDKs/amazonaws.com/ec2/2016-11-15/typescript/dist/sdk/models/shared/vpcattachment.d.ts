import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";
/**
 * Describes an attachment between a virtual private gateway and a VPC.
**/
export declare class VpcAttachment extends SpeakeasyBase {
    state?: AttachmentStatusEnum;
    vpcId?: string;
}
