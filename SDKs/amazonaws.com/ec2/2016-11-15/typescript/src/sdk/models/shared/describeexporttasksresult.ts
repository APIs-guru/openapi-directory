import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTask } from "./exporttask";



export class DescribeExportTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ExportTask })
  exportTasks?: ExportTask[];
}
