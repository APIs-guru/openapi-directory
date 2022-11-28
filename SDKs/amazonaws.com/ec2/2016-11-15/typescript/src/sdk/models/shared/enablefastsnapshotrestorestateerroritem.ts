import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnableFastSnapshotRestoreStateError } from "./enablefastsnapshotrestorestateerror";



// EnableFastSnapshotRestoreStateErrorItem
/** 
 * Contains information about an error that occurred when enabling fast snapshot restores.
**/
export class EnableFastSnapshotRestoreStateErrorItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  error?: EnableFastSnapshotRestoreStateError;
}
