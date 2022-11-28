import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportTaskFilter } from "./importtaskfilter";



export class DescribeImportTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ImportTaskFilter })
  filters?: ImportTaskFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
