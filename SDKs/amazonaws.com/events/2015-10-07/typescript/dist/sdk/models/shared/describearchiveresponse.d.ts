import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchiveStateEnum } from "./archivestateenum";
export declare class DescribeArchiveResponse extends SpeakeasyBase {
    archiveArn?: string;
    archiveName?: string;
    creationTime?: Date;
    description?: string;
    eventCount?: number;
    eventPattern?: string;
    eventSourceArn?: string;
    retentionDays?: number;
    sizeBytes?: number;
    state?: ArchiveStateEnum;
    stateReason?: string;
}
