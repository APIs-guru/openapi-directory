import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resource } from "./resource";


// Event
/** 
 * Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessKeyId" })
  accessKeyId?: string;

  @Metadata({ data: "json, name=CloudTrailEvent" })
  cloudTrailEvent?: string;

  @Metadata({ data: "json, name=EventId" })
  eventId?: string;

  @Metadata({ data: "json, name=EventName" })
  eventName?: string;

  @Metadata({ data: "json, name=EventSource" })
  eventSource?: string;

  @Metadata({ data: "json, name=EventTime" })
  eventTime?: Date;

  @Metadata({ data: "json, name=ReadOnly" })
  readOnly?: string;

  @Metadata({ data: "json, name=Resources", elemType: shared.Resource })
  resources?: Resource[];

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
