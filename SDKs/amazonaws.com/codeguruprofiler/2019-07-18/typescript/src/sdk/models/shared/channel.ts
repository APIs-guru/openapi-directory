import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventPublisherEnum } from "./eventpublisherenum";


// Channel
/** 
 * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventPublishers" })
  eventPublishers: EventPublisherEnum[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
