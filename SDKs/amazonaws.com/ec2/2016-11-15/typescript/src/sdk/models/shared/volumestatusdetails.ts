import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeStatusNameEnum } from "./volumestatusnameenum";



// VolumeStatusDetails
/** 
 * Describes a volume status.
**/
export class VolumeStatusDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: VolumeStatusNameEnum;

  @SpeakeasyMetadata()
  status?: string;
}
