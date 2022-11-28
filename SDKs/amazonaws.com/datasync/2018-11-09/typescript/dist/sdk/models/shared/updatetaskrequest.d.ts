import { SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskSchedule } from "./taskschedule";
/**
 * UpdateTaskResponse
**/
export declare class UpdateTaskRequest extends SpeakeasyBase {
    cloudWatchLogGroupArn?: string;
    excludes?: FilterRule[];
    includes?: FilterRule[];
    name?: string;
    options?: Options;
    schedule?: TaskSchedule;
    taskArn: string;
}
