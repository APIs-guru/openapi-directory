import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnableFastSnapshotRestoreSuccessItem } from "./enablefastsnapshotrestoresuccessitem";
import { EnableFastSnapshotRestoreErrorItem } from "./enablefastsnapshotrestoreerroritem";



export class EnableFastSnapshotRestoresResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EnableFastSnapshotRestoreSuccessItem })
  successful?: EnableFastSnapshotRestoreSuccessItem[];

  @SpeakeasyMetadata({ elemType: EnableFastSnapshotRestoreErrorItem })
  unsuccessful?: EnableFastSnapshotRestoreErrorItem[];
}
