import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportDataFormatEnum } from "./exportdataformatenum";
import { ExportFilter } from "./exportfilter";



export class StartExportTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=exportDataFormat" })
  exportDataFormat?: ExportDataFormatEnum[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ExportFilter })
  filters?: ExportFilter[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}
