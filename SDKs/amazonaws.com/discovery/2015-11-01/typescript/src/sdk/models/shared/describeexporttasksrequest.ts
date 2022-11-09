import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportFilter } from "./exportfilter";


export class DescribeExportTasksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportIds" })
  exportIds?: string[];

  @Metadata({ data: "json, name=filters", elemType: shared.ExportFilter })
  filters?: ExportFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
