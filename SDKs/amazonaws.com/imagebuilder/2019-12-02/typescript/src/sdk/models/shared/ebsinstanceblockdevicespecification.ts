import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EbsVolumeTypeEnum } from "./ebsvolumetypeenum";


// EbsInstanceBlockDeviceSpecification
/** 
 * Amazon EBS-specific block device mapping specifications.
**/
export class EbsInstanceBlockDeviceSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleteOnTermination" })
  deleteOnTermination?: boolean;

  @Metadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=iops" })
  iops?: number;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=snapshotId" })
  snapshotId?: string;

  @Metadata({ data: "json, name=volumeSize" })
  volumeSize?: number;

  @Metadata({ data: "json, name=volumeType" })
  volumeType?: EbsVolumeTypeEnum;
}
