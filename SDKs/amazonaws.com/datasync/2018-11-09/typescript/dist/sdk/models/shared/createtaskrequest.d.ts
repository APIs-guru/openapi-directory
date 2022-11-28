import { SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskSchedule } from "./taskschedule";
import { TagListEntry } from "./taglistentry";
/**
 * CreateTaskRequest
**/
export declare class CreateTaskRequest extends SpeakeasyBase {
    cloudWatchLogGroupArn?: string;
    destinationLocationArn: string;
    excludes?: FilterRule[];
    includes?: FilterRule[];
    name?: string;
    options?: Options;
    schedule?: TaskSchedule;
    sourceLocationArn: string;
    tags?: TagListEntry[];
}
