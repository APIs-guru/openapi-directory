import { SpeakeasyBase } from "../../../internal/utils";
import { EventInformation } from "./eventinformation";
import { FleetEventTypeEnum } from "./fleeteventtypeenum";
/**
 * Describes an event in the history of an EC2 Fleet.
**/
export declare class HistoryRecordEntry extends SpeakeasyBase {
    eventInformation?: EventInformation;
    eventType?: FleetEventTypeEnum;
    timestamp?: Date;
}
