import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";
/**
 * Describes a network interface attachment.
**/
export declare class InstanceNetworkInterfaceAttachment extends SpeakeasyBase {
    attachTime?: Date;
    attachmentId?: string;
    deleteOnTermination?: boolean;
    deviceIndex?: number;
    networkCardIndex?: number;
    status?: AttachmentStatusEnum;
}
