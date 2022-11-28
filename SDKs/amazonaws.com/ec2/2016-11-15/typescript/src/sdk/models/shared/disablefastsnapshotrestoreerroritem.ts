import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisableFastSnapshotRestoreStateErrorItem } from "./disablefastsnapshotrestorestateerroritem";



// DisableFastSnapshotRestoreErrorItem
/** 
 * Contains information about the errors that occurred when disabling fast snapshot restores.
**/
export class DisableFastSnapshotRestoreErrorItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DisableFastSnapshotRestoreStateErrorItem })
  fastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];

  @SpeakeasyMetadata()
  snapshotId?: string;
}
