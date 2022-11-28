import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";
/**
 * Describes a block device for an EBS volume.
**/
export declare class EbsBlockDevice extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    kmsKeyId?: string;
    outpostArn?: string;
    snapshotId?: string;
    throughput?: number;
    volumeSize?: number;
    volumeType?: VolumeTypeEnum;
}
