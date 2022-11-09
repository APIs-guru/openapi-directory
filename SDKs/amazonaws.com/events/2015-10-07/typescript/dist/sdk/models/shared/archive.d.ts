import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchiveStateEnum } from "./archivestateenum";
/**
 * An <code>Archive</code> object that contains details about an archive.
**/
export declare class Archive extends SpeakeasyBase {
    archiveName?: string;
    creationTime?: Date;
    eventCount?: number;
    eventSourceArn?: string;
    retentionDays?: number;
    sizeBytes?: number;
    state?: ArchiveStateEnum;
    stateReason?: string;
}
