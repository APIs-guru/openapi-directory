import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportTask } from "./importtask";


export class DescribeImportTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.ImportTask })
  tasks?: ImportTask[];
}
