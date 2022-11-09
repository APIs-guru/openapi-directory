import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportTaskFilter } from "./importtaskfilter";


export class DescribeImportTasksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.ImportTaskFilter })
  filters?: ImportTaskFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
