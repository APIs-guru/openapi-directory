import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeModificationStateEnum } from "./volumemodificationstateenum";
import { VolumeTypeEnum } from "./volumetypeenum";



// VolumeModification
/** 
 * <p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>
**/
export class VolumeModification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endTime?: Date;

  @SpeakeasyMetadata()
  modificationState?: VolumeModificationStateEnum;

  @SpeakeasyMetadata()
  originalIops?: number;

  @SpeakeasyMetadata()
  originalMultiAttachEnabled?: boolean;

  @SpeakeasyMetadata()
  originalSize?: number;

  @SpeakeasyMetadata()
  originalThroughput?: number;

  @SpeakeasyMetadata()
  originalVolumeType?: VolumeTypeEnum;

  @SpeakeasyMetadata()
  progress?: number;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata()
  targetIops?: number;

  @SpeakeasyMetadata()
  targetMultiAttachEnabled?: boolean;

  @SpeakeasyMetadata()
  targetSize?: number;

  @SpeakeasyMetadata()
  targetThroughput?: number;

  @SpeakeasyMetadata()
  targetVolumeType?: VolumeTypeEnum;

  @SpeakeasyMetadata()
  volumeId?: string;
}
