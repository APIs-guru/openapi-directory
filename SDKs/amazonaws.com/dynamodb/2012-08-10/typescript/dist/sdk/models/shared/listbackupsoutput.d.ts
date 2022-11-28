import { SpeakeasyBase } from "../../../internal/utils";
import { BackupSummary } from "./backupsummary";
export declare class ListBackupsOutput extends SpeakeasyBase {
    backupSummaries?: BackupSummary[];
    lastEvaluatedBackupArn?: string;
}
