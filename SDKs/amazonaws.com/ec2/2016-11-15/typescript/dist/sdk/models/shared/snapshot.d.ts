import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotStateEnum } from "./snapshotstateenum";
import { Tag } from "./tag";
/**
 * Describes a snapshot.
**/
export declare class Snapshot extends SpeakeasyBase {
    dataEncryptionKeyId?: string;
    description?: string;
    encrypted?: boolean;
    kmsKeyId?: string;
    outpostArn?: string;
    ownerAlias?: string;
    ownerId?: string;
    progress?: string;
    snapshotId?: string;
    startTime?: Date;
    state?: SnapshotStateEnum;
    stateMessage?: string;
    tags?: Tag[];
    volumeId?: string;
    volumeSize?: number;
}
