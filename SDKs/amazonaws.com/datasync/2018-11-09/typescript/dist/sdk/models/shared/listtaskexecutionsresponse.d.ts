import { SpeakeasyBase } from "../../../internal/utils";
import { TaskExecutionListEntry } from "./taskexecutionlistentry";
/**
 * ListTaskExecutionsResponse
**/
export declare class ListTaskExecutionsResponse extends SpeakeasyBase {
    nextToken?: string;
    taskExecutions?: TaskExecutionListEntry[];
}
