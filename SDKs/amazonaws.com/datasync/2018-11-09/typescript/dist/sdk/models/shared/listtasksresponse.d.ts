import { SpeakeasyBase } from "../../../internal/utils";
import { TaskListEntry } from "./tasklistentry";
/**
 * ListTasksResponse
**/
export declare class ListTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    tasks?: TaskListEntry[];
}
