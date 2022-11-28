import { SpeakeasyBase } from "../../../internal/utils";
import { DisableFastSnapshotRestoreSuccessItem } from "./disablefastsnapshotrestoresuccessitem";
import { DisableFastSnapshotRestoreErrorItem } from "./disablefastsnapshotrestoreerroritem";
export declare class DisableFastSnapshotRestoresResult extends SpeakeasyBase {
    successful?: DisableFastSnapshotRestoreSuccessItem[];
    unsuccessful?: DisableFastSnapshotRestoreErrorItem[];
}
