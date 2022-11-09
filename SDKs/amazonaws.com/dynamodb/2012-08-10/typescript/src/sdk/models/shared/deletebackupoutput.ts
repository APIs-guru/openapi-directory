import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupDescription } from "./backupdescription";


export class DeleteBackupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupDescription" })
  backupDescription?: BackupDescription;
}
