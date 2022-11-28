import { SpeakeasyBase } from "../../../internal/utils";
import { BackupStatusEnum } from "./backupstatusenum";
import { BackupTypeEnum } from "./backuptypeenum";
/**
 * Contains details for the backup.
**/
export declare class BackupSummary extends SpeakeasyBase {
    backupArn?: string;
    backupCreationDateTime?: Date;
    backupExpiryDateTime?: Date;
    backupName?: string;
    backupSizeBytes?: number;
    backupStatus?: BackupStatusEnum;
    backupType?: BackupTypeEnum;
    tableArn?: string;
    tableId?: string;
    tableName?: string;
}
