import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackupSummary } from "./backupsummary";


export class ListBackupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupSummaries", elemType: shared.BackupSummary })
  backupSummaries?: BackupSummary[];

  @Metadata({ data: "json, name=LastEvaluatedBackupArn" })
  lastEvaluatedBackupArn?: string;
}
