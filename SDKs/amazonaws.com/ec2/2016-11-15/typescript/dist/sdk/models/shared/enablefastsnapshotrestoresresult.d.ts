import { SpeakeasyBase } from "../../../internal/utils";
import { EnableFastSnapshotRestoreSuccessItem } from "./enablefastsnapshotrestoresuccessitem";
import { EnableFastSnapshotRestoreErrorItem } from "./enablefastsnapshotrestoreerroritem";
export declare class EnableFastSnapshotRestoresResult extends SpeakeasyBase {
    successful?: EnableFastSnapshotRestoreSuccessItem[];
    unsuccessful?: EnableFastSnapshotRestoreErrorItem[];
}
