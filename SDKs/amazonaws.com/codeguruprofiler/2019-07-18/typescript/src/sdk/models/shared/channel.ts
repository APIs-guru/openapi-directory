import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventPublisherEnum } from "./eventpublisherenum";



// Channel
/** 
 * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventPublishers" })
  eventPublishers: EventPublisherEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
