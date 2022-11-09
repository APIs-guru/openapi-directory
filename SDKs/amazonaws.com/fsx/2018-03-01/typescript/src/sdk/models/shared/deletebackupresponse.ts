import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupLifecycleEnum } from "./backuplifecycleenum";


// DeleteBackupResponse
/** 
 * The response object for <code>DeleteBackup</code> operation.
**/
export class DeleteBackupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId?: string;

  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: BackupLifecycleEnum;
}
