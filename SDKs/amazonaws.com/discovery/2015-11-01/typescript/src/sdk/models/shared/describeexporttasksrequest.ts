import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportFilter } from "./exportfilter";



export class DescribeExportTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportIds" })
  exportIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ExportFilter })
  filters?: ExportFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
