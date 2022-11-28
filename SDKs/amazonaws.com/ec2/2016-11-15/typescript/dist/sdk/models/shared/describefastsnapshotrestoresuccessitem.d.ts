import { SpeakeasyBase } from "../../../internal/utils";
import { FastSnapshotRestoreStateCodeEnum } from "./fastsnapshotrestorestatecodeenum";
/**
 * Describes fast snapshot restores for a snapshot.
**/
export declare class DescribeFastSnapshotRestoreSuccessItem extends SpeakeasyBase {
    availabilityZone?: string;
    disabledTime?: Date;
    disablingTime?: Date;
    enabledTime?: Date;
    enablingTime?: Date;
    optimizingTime?: Date;
    ownerAlias?: string;
    ownerId?: string;
    snapshotId?: string;
    state?: FastSnapshotRestoreStateCodeEnum;
    stateTransitionReason?: string;
}
