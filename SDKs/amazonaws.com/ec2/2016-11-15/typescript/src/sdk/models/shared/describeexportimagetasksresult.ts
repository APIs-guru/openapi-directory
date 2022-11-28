import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportImageTask } from "./exportimagetask";



export class DescribeExportImageTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ExportImageTask })
  exportImageTasks?: ExportImageTask[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
