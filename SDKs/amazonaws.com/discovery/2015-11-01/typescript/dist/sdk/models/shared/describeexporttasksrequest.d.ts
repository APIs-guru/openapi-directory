import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportFilter } from "./exportfilter";
export declare class DescribeExportTasksRequest extends SpeakeasyBase {
    exportIds?: string[];
    filters?: ExportFilter[];
    maxResults?: number;
    nextToken?: string;
}
