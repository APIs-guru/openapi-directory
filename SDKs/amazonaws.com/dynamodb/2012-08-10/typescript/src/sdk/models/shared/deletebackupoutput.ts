import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupDescription } from "./backupdescription";



export class DeleteBackupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupDescription" })
  backupDescription?: BackupDescription;
}
