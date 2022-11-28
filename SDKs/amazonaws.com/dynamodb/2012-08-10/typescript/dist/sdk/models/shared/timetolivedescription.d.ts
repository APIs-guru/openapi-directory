import { SpeakeasyBase } from "../../../internal/utils";
import { TimeToLiveStatusEnum } from "./timetolivestatusenum";
/**
 * The description of the Time to Live (TTL) status on the specified table.
**/
export declare class TimeToLiveDescription extends SpeakeasyBase {
    attributeName?: string;
    timeToLiveStatus?: TimeToLiveStatusEnum;
}
