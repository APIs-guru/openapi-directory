import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains manual snapshot limit information for a directory.
**/
export declare class SnapshotLimits extends SpeakeasyBase {
    manualSnapshotsCurrentCount?: number;
    manualSnapshotsLimit?: number;
    manualSnapshotsLimitReached?: boolean;
}
