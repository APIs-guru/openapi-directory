import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeStatusAttachmentStatus
/** 
 * Information about the instances to which the volume is attached.
**/
export class VolumeStatusAttachmentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  ioPerformance?: string;
}
