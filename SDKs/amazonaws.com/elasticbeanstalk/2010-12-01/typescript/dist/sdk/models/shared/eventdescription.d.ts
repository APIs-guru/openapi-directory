import { SpeakeasyBase } from "../../../internal/utils";
import { EventSeverityEnum } from "./eventseverityenum";
/**
 * Describes an event.
**/
export declare class EventDescription extends SpeakeasyBase {
    applicationName?: string;
    environmentName?: string;
    eventDate?: Date;
    message?: string;
    platformArn?: string;
    requestId?: string;
    severity?: EventSeverityEnum;
    templateName?: string;
    versionLabel?: string;
}
