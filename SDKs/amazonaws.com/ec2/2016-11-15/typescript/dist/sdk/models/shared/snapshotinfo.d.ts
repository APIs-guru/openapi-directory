import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotStateEnum } from "./snapshotstateenum";
import { Tag } from "./tag";
/**
 * Information about a snapshot.
**/
export declare class SnapshotInfo extends SpeakeasyBase {
    description?: string;
    encrypted?: boolean;
    outpostArn?: string;
    ownerId?: string;
    progress?: string;
    snapshotId?: string;
    startTime?: Date;
    state?: SnapshotStateEnum;
    tags?: Tag[];
    volumeId?: string;
    volumeSize?: number;
}
