import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotTaskDetail } from "./snapshottaskdetail";
import { Tag } from "./tag";



// ImportSnapshotTask
/** 
 * Describes an import snapshot task.
**/
export class ImportSnapshotTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  importTaskId?: string;

  @SpeakeasyMetadata()
  snapshotTaskDetail?: SnapshotTaskDetail;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
