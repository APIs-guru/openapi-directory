import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupDescription } from "./backupdescription";



export class DescribeBackupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupDescription" })
  backupDescription?: BackupDescription;
}
