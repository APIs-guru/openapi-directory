import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";
/**
 * Describes a parameter used to set up an EBS volume in a block device mapping.
**/
export declare class EbsInstanceBlockDevice extends SpeakeasyBase {
    attachTime?: Date;
    deleteOnTermination?: boolean;
    status?: AttachmentStatusEnum;
    volumeId?: string;
}
