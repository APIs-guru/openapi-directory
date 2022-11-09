import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportTaskFilter } from "./importtaskfilter";
export declare class DescribeImportTasksRequest extends SpeakeasyBase {
    filters?: ImportTaskFilter[];
    maxResults?: number;
    nextToken?: string;
}
