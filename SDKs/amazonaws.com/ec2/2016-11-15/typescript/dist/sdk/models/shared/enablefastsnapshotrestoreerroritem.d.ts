import { SpeakeasyBase } from "../../../internal/utils";
import { EnableFastSnapshotRestoreStateErrorItem } from "./enablefastsnapshotrestorestateerroritem";
/**
 * Contains information about the errors that occurred when enabling fast snapshot restores.
**/
export declare class EnableFastSnapshotRestoreErrorItem extends SpeakeasyBase {
    fastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];
    snapshotId?: string;
}
