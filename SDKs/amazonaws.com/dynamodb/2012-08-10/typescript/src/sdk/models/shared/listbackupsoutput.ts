import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupSummary } from "./backupsummary";



export class ListBackupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupSummaries", elemType: BackupSummary })
  backupSummaries?: BackupSummary[];

  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedBackupArn" })
  lastEvaluatedBackupArn?: string;
}
