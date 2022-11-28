import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeStatusAction } from "./volumestatusaction";
import { VolumeStatusAttachmentStatus } from "./volumestatusattachmentstatus";
import { VolumeStatusEvent } from "./volumestatusevent";
import { VolumeStatusInfo } from "./volumestatusinfo";



// VolumeStatusItem
/** 
 * Describes the volume status.
**/
export class VolumeStatusItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: VolumeStatusAction })
  actions?: VolumeStatusAction[];

  @SpeakeasyMetadata({ elemType: VolumeStatusAttachmentStatus })
  attachmentStatuses?: VolumeStatusAttachmentStatus[];

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata({ elemType: VolumeStatusEvent })
  events?: VolumeStatusEvent[];

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  volumeId?: string;

  @SpeakeasyMetadata()
  volumeStatus?: VolumeStatusInfo;
}
