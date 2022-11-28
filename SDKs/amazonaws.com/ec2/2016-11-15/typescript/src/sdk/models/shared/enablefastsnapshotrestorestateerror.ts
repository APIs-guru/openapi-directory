import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableFastSnapshotRestoreStateError
/** 
 * Describes an error that occurred when enabling fast snapshot restores.
**/
export class EnableFastSnapshotRestoreStateError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
