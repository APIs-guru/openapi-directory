import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupName" })
  backupName: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
