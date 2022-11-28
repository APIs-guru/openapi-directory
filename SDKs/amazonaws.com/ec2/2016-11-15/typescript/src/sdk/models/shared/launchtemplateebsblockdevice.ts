import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";



// LaunchTemplateEbsBlockDevice
/** 
 * Describes a block device for an EBS volume.
**/
export class LaunchTemplateEbsBlockDevice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata()
  throughput?: number;

  @SpeakeasyMetadata()
  volumeSize?: number;

  @SpeakeasyMetadata()
  volumeType?: VolumeTypeEnum;
}
