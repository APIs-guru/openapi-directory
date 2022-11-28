import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeStatusEvent
/** 
 * Describes a volume status event.
**/
export class VolumeStatusEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  eventId?: string;

  @SpeakeasyMetadata()
  eventType?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  notAfter?: Date;

  @SpeakeasyMetadata()
  notBefore?: Date;
}
