import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeStatusAction
/** 
 * Describes a volume status operation code.
**/
export class VolumeStatusAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  eventId?: string;

  @SpeakeasyMetadata()
  eventType?: string;
}
