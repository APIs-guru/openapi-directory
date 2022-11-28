import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTaskFilter } from "./datarepositorytaskfilter";
export declare class DescribeDataRepositoryTasksRequest extends SpeakeasyBase {
    filters?: DataRepositoryTaskFilter[];
    maxResults?: number;
    nextToken?: string;
    taskIds?: string[];
}
