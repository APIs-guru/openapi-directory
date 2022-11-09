import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportDataFormatEnum } from "./exportdataformatenum";
import { ExportFilter } from "./exportfilter";
export declare class StartExportTaskRequest extends SpeakeasyBase {
    endTime?: Date;
    exportDataFormat?: ExportDataFormatEnum[];
    filters?: ExportFilter[];
    startTime?: Date;
}
