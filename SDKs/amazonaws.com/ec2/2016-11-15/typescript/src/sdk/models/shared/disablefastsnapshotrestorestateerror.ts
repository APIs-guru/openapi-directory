import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableFastSnapshotRestoreStateError
/** 
 * Describes an error that occurred when disabling fast snapshot restores.
**/
export class DisableFastSnapshotRestoreStateError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
