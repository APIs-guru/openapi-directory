import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotStatusEnum } from "./snapshotstatusenum";
import { SnapshotTypeEnum } from "./snapshottypeenum";
/**
 * Describes a directory snapshot.
**/
export declare class Snapshot extends SpeakeasyBase {
    directoryId?: string;
    name?: string;
    snapshotId?: string;
    startTime?: Date;
    status?: SnapshotStatusEnum;
    type?: SnapshotTypeEnum;
}
