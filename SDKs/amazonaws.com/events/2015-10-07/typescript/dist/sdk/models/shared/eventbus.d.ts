import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event bus receives events from a source and routes them to rules associated with that event bus. Your account's default event bus receives events from Amazon Web Services services. A custom event bus can receive events from your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications.
**/
export declare class EventBus extends SpeakeasyBase {
    arn?: string;
    name?: string;
    policy?: string;
}
