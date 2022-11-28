import { SpeakeasyBase } from "../../../internal/utils";
import { DesiredStatusEnum } from "./desiredstatusenum";
import { LaunchTypeEnum } from "./launchtypeenum";
export declare class ListTasksRequest extends SpeakeasyBase {
    cluster?: string;
    containerInstance?: string;
    desiredStatus?: DesiredStatusEnum;
    family?: string;
    launchType?: LaunchTypeEnum;
    maxResults?: number;
    nextToken?: string;
    serviceName?: string;
    startedBy?: string;
}
