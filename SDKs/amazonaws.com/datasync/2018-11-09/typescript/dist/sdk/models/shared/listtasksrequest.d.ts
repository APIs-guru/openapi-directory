import { SpeakeasyBase } from "../../../internal/utils";
import { TaskFilter } from "./taskfilter";
/**
 * ListTasksRequest
**/
export declare class ListTasksRequest extends SpeakeasyBase {
    filters?: TaskFilter[];
    maxResults?: number;
    nextToken?: string;
}
