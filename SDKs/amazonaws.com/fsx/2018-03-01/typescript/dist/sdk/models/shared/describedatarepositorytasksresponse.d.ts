import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTask } from "./datarepositorytask";
export declare class DescribeDataRepositoryTasksResponse extends SpeakeasyBase {
    dataRepositoryTasks?: DataRepositoryTask[];
    nextToken?: string;
}
