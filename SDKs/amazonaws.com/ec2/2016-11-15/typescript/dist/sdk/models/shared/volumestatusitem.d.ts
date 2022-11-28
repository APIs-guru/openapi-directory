import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeStatusAction } from "./volumestatusaction";
import { VolumeStatusAttachmentStatus } from "./volumestatusattachmentstatus";
import { VolumeStatusEvent } from "./volumestatusevent";
import { VolumeStatusInfo } from "./volumestatusinfo";
/**
 * Describes the volume status.
**/
export declare class VolumeStatusItem extends SpeakeasyBase {
    actions?: VolumeStatusAction[];
    attachmentStatuses?: VolumeStatusAttachmentStatus[];
    availabilityZone?: string;
    events?: VolumeStatusEvent[];
    outpostArn?: string;
    volumeId?: string;
    volumeStatus?: VolumeStatusInfo;
}
