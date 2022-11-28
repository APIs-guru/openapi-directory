import { SpeakeasyBase } from "../../../internal/utils";
import { DisableFastSnapshotRestoreStateErrorItem } from "./disablefastsnapshotrestorestateerroritem";
/**
 * Contains information about the errors that occurred when disabling fast snapshot restores.
**/
export declare class DisableFastSnapshotRestoreErrorItem extends SpeakeasyBase {
    fastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];
    snapshotId?: string;
}
