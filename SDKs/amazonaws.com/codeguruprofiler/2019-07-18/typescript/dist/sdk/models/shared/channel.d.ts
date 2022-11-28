import { SpeakeasyBase } from "../../../internal/utils";
import { EventPublisherEnum } from "./eventpublisherenum";
/**
 * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
**/
export declare class Channel extends SpeakeasyBase {
    eventPublishers: EventPublisherEnum[];
    id?: string;
    uri: string;
}
