import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeAttachmentStateEnum } from "./volumeattachmentstateenum";



// VolumeAttachment
/** 
 * Describes volume attachment details.
**/
export class VolumeAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachTime?: Date;

  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  device?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  state?: VolumeAttachmentStateEnum;

  @SpeakeasyMetadata()
  volumeId?: string;
}
