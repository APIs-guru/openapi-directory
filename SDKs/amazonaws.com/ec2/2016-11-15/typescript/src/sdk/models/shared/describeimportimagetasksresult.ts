import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportImageTask } from "./importimagetask";



export class DescribeImportImageTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ImportImageTask })
  importImageTasks?: ImportImageTask[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
