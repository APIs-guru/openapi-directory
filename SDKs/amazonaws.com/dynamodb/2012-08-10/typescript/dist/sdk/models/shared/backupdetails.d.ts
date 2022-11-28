import { SpeakeasyBase } from "../../../internal/utils";
import { BackupStatusEnum } from "./backupstatusenum";
import { BackupTypeEnum } from "./backuptypeenum";
/**
 * Contains the details of the backup created for the table.
**/
export declare class BackupDetails extends SpeakeasyBase {
    backupArn: string;
    backupCreationDateTime: Date;
    backupExpiryDateTime?: Date;
    backupName: string;
    backupSizeBytes?: number;
    backupStatus: BackupStatusEnum;
    backupType: BackupTypeEnum;
}
