import { SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskSchedule } from "./taskschedule";
import { TaskStatusEnum } from "./taskstatusenum";
/**
 * DescribeTaskResponse
**/
export declare class DescribeTaskResponse extends SpeakeasyBase {
    cloudWatchLogGroupArn?: string;
    creationTime?: Date;
    currentTaskExecutionArn?: string;
    destinationLocationArn?: string;
    destinationNetworkInterfaceArns?: string[];
    errorCode?: string;
    errorDetail?: string;
    excludes?: FilterRule[];
    includes?: FilterRule[];
    name?: string;
    options?: Options;
    schedule?: TaskSchedule;
    sourceLocationArn?: string;
    sourceNetworkInterfaceArns?: string[];
    status?: TaskStatusEnum;
    taskArn?: string;
}
