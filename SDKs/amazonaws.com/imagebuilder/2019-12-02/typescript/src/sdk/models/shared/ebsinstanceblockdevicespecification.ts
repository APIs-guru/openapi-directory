import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsVolumeTypeEnum } from "./ebsvolumetypeenum";



// EbsInstanceBlockDeviceSpecification
/** 
 * Amazon EBS-specific block device mapping specifications.
**/
export class EbsInstanceBlockDeviceSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleteOnTermination" })
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotId" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeSize" })
  volumeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeType" })
  volumeType?: EbsVolumeTypeEnum;
}
