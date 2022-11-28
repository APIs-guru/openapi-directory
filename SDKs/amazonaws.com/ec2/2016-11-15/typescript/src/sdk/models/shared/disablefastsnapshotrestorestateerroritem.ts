import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisableFastSnapshotRestoreStateError } from "./disablefastsnapshotrestorestateerror";



// DisableFastSnapshotRestoreStateErrorItem
/** 
 * Contains information about an error that occurred when disabling fast snapshot restores.
**/
export class DisableFastSnapshotRestoreStateErrorItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  error?: DisableFastSnapshotRestoreStateError;
}
