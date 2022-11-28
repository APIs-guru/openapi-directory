import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportSnapshotTask } from "./importsnapshottask";



export class DescribeImportSnapshotTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ImportSnapshotTask })
  importSnapshotTasks?: ImportSnapshotTask[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
