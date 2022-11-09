import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBackupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupName" })
  backupName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
