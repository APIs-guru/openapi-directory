import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSeverityEnum } from "./eventseverityenum";



// EventDescription
/** 
 * Describes an event.
**/
export class EventDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationName?: string;

  @SpeakeasyMetadata()
  environmentName?: string;

  @SpeakeasyMetadata()
  eventDate?: Date;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  platformArn?: string;

  @SpeakeasyMetadata()
  requestId?: string;

  @SpeakeasyMetadata()
  severity?: EventSeverityEnum;

  @SpeakeasyMetadata()
  templateName?: string;

  @SpeakeasyMetadata()
  versionLabel?: string;
}
