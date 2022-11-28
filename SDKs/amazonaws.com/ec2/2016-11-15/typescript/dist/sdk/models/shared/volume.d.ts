import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeAttachment } from "./volumeattachment";
import { VolumeStateEnum } from "./volumestateenum";
import { Tag } from "./tag";
import { VolumeTypeEnum } from "./volumetypeenum";
/**
 * Describes a volume.
**/
export declare class Volume extends SpeakeasyBase {
    attachments?: VolumeAttachment[];
    availabilityZone?: string;
    createTime?: Date;
    encrypted?: boolean;
    fastRestored?: boolean;
    iops?: number;
    kmsKeyId?: string;
    multiAttachEnabled?: boolean;
    outpostArn?: string;
    size?: number;
    snapshotId?: string;
    state?: VolumeStateEnum;
    tags?: Tag[];
    throughput?: number;
    volumeId?: string;
    volumeType?: VolumeTypeEnum;
}
