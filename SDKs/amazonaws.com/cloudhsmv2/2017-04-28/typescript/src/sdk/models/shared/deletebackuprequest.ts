import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;
}
