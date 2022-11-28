import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTypeEnum } from "./launchtypeenum";
import { SchedulingStrategyEnum } from "./schedulingstrategyenum";
export declare class ListServicesRequest extends SpeakeasyBase {
    cluster?: string;
    launchType?: LaunchTypeEnum;
    maxResults?: number;
    nextToken?: string;
    schedulingStrategy?: SchedulingStrategyEnum;
}
