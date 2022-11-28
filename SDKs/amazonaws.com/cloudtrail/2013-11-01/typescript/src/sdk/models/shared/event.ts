import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



// Event
/** 
 * Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudTrailEvent" })
  cloudTrailEvent?: string;

  @SpeakeasyMetadata({ data: "json, name=EventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=EventName" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "json, name=EventSource" })
  eventSource?: string;

  @SpeakeasyMetadata({ data: "json, name=EventTime" })
  eventTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReadOnly" })
  readOnly?: string;

  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: Resource })
  resources?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
