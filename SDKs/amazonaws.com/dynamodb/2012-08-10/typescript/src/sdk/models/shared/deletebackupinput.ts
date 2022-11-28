import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupArn" })
  backupArn: string;
}
