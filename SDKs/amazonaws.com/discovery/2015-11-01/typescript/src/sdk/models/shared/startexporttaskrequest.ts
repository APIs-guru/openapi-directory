import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportDataFormatEnum } from "./exportdataformatenum";
import { ExportFilter } from "./exportfilter";


export class StartExportTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=exportDataFormat" })
  exportDataFormat?: ExportDataFormatEnum[];

  @Metadata({ data: "json, name=filters", elemType: shared.ExportFilter })
  filters?: ExportFilter[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}
