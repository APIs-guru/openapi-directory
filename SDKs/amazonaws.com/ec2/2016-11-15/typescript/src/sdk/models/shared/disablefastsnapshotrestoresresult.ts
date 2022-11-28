import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisableFastSnapshotRestoreSuccessItem } from "./disablefastsnapshotrestoresuccessitem";
import { DisableFastSnapshotRestoreErrorItem } from "./disablefastsnapshotrestoreerroritem";



export class DisableFastSnapshotRestoresResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DisableFastSnapshotRestoreSuccessItem })
  successful?: DisableFastSnapshotRestoreSuccessItem[];

  @SpeakeasyMetadata({ elemType: DisableFastSnapshotRestoreErrorItem })
  unsuccessful?: DisableFastSnapshotRestoreErrorItem[];
}
