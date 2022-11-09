import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupDetails } from "./backupdetails";


export class CreateBackupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupDetails" })
  backupDetails?: BackupDetails;
}
