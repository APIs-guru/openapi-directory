import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeStatusDetails } from "./volumestatusdetails";
import { VolumeStatusInfoStatusEnum } from "./volumestatusinfostatusenum";



// VolumeStatusInfo
/** 
 * Describes the status of a volume.
**/
export class VolumeStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: VolumeStatusDetails })
  details?: VolumeStatusDetails[];

  @SpeakeasyMetadata()
  status?: VolumeStatusInfoStatusEnum;
}
