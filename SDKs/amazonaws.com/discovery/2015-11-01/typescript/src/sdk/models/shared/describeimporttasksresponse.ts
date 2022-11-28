import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportTask } from "./importtask";



export class DescribeImportTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: ImportTask })
  tasks?: ImportTask[];
}
