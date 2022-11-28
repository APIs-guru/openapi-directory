import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";
/**
 * Describes a network interface attachment.
**/
export declare class NetworkInterfaceAttachment extends SpeakeasyBase {
    attachTime?: Date;
    attachmentId?: string;
    deleteOnTermination?: boolean;
    deviceIndex?: number;
    instanceId?: string;
    instanceOwnerId?: string;
    networkCardIndex?: number;
    status?: AttachmentStatusEnum;
}
