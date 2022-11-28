import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTask } from "./exporttask";



export class CreateInstanceExportTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  exportTask?: ExportTask;
}
