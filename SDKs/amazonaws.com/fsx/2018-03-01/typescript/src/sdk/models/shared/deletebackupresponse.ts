import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupLifecycleEnum } from "./backuplifecycleenum";



// DeleteBackupResponse
/** 
 * The response object for <code>DeleteBackup</code> operation.
**/
export class DeleteBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId?: string;

  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: BackupLifecycleEnum;
}
