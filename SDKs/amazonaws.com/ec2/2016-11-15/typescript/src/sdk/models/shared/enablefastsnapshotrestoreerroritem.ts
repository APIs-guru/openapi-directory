import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnableFastSnapshotRestoreStateErrorItem } from "./enablefastsnapshotrestorestateerroritem";



// EnableFastSnapshotRestoreErrorItem
/** 
 * Contains information about the errors that occurred when enabling fast snapshot restores.
**/
export class EnableFastSnapshotRestoreErrorItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EnableFastSnapshotRestoreStateErrorItem })
  fastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];

  @SpeakeasyMetadata()
  snapshotId?: string;
}
