import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EbsVolumeTypeEnum } from "./ebsvolumetypeenum";
/**
 * Amazon EBS-specific block device mapping specifications.
**/
export declare class EbsInstanceBlockDeviceSpecification extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    kmsKeyId?: string;
    snapshotId?: string;
    volumeSize?: number;
    volumeType?: EbsVolumeTypeEnum;
}
