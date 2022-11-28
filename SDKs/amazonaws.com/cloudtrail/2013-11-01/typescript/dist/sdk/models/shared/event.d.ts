import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
**/
export declare class Event extends SpeakeasyBase {
    accessKeyId?: string;
    cloudTrailEvent?: string;
    eventId?: string;
    eventName?: string;
    eventSource?: string;
    eventTime?: Date;
    readOnly?: string;
    resources?: Resource[];
    username?: string;
}
