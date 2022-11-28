import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";



// EbsBlockDevice
/** 
 * Describes a block device for an EBS volume.
**/
export class EbsBlockDevice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata()
  throughput?: number;

  @SpeakeasyMetadata()
  volumeSize?: number;

  @SpeakeasyMetadata()
  volumeType?: VolumeTypeEnum;
}
