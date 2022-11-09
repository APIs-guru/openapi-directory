import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestoreBackupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId: string;
}
