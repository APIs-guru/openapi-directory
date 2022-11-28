import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;
}
