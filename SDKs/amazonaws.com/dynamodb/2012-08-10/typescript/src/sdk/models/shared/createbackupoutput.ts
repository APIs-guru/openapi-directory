import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupDetails } from "./backupdetails";



export class CreateBackupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupDetails" })
  backupDetails?: BackupDetails;
}
