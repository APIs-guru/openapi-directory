import { SpeakeasyBase } from "../../../internal/utils";
import { ExportToS3Task } from "./exporttos3task";
import { InstanceExportDetails } from "./instanceexportdetails";
import { ExportTaskStateEnum } from "./exporttaskstateenum";
import { Tag } from "./tag";
/**
 * Describes an export instance task.
**/
export declare class ExportTask extends SpeakeasyBase {
    description?: string;
    exportTaskId?: string;
    exportToS3Task?: ExportToS3Task;
    instanceExportDetails?: InstanceExportDetails;
    state?: ExportTaskStateEnum;
    statusMessage?: string;
    tags?: Tag[];
}
