import { SpeakeasyBase } from "../../../internal/utils";
import { EventInformation } from "./eventinformation";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * Describes an event in the history of the Spot Fleet request.
**/
export declare class HistoryRecord extends SpeakeasyBase {
    eventInformation?: EventInformation;
    eventType?: EventTypeEnum;
    timestamp?: Date;
}
