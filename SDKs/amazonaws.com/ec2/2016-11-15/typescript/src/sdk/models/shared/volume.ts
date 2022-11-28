import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeAttachment } from "./volumeattachment";
import { VolumeStateEnum } from "./volumestateenum";
import { Tag } from "./tag";
import { VolumeTypeEnum } from "./volumetypeenum";



// Volume
/** 
 * Describes a volume.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: VolumeAttachment })
  attachments?: VolumeAttachment[];

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  createTime?: Date;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  fastRestored?: boolean;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  multiAttachEnabled?: boolean;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  size?: number;

  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata()
  state?: VolumeStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  throughput?: number;

  @SpeakeasyMetadata()
  volumeId?: string;

  @SpeakeasyMetadata()
  volumeType?: VolumeTypeEnum;
}
