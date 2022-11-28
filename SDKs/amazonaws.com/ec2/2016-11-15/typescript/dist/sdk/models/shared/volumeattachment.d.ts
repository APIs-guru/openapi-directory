import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeAttachmentStateEnum } from "./volumeattachmentstateenum";
/**
 * Describes volume attachment details.
**/
export declare class VolumeAttachment extends SpeakeasyBase {
    attachTime?: Date;
    deleteOnTermination?: boolean;
    device?: string;
    instanceId?: string;
    state?: VolumeAttachmentStateEnum;
    volumeId?: string;
}
