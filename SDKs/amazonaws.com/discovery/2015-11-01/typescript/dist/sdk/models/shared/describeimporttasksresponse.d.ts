import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportTask } from "./importtask";
export declare class DescribeImportTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    tasks?: ImportTask[];
}
