import { SpeakeasyBase } from "../../../internal/utils";
import { TaskRun } from "./taskrun";
export declare class GetMlTaskRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    taskRuns?: TaskRun[];
}
