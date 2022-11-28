import { SpeakeasyBase } from "../../../internal/utils";
import { EventSourceStateEnum } from "./eventsourcestateenum";
/**
 * A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.
**/
export declare class EventSource extends SpeakeasyBase {
    arn?: string;
    createdBy?: string;
    creationTime?: Date;
    expirationTime?: Date;
    name?: string;
    state?: EventSourceStateEnum;
}
