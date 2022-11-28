import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeModificationStateEnum } from "./volumemodificationstateenum";
import { VolumeTypeEnum } from "./volumetypeenum";
/**
 * <p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>
**/
export declare class VolumeModification extends SpeakeasyBase {
    endTime?: Date;
    modificationState?: VolumeModificationStateEnum;
    originalIops?: number;
    originalMultiAttachEnabled?: boolean;
    originalSize?: number;
    originalThroughput?: number;
    originalVolumeType?: VolumeTypeEnum;
    progress?: number;
    startTime?: Date;
    statusMessage?: string;
    targetIops?: number;
    targetMultiAttachEnabled?: boolean;
    targetSize?: number;
    targetThroughput?: number;
    targetVolumeType?: VolumeTypeEnum;
    volumeId?: string;
}
