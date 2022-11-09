import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBackupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupArn" })
  backupArn: string;
}
