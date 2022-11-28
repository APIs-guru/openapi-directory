import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteBackupRequest
/** 
 * The request object for <code>DeleteBackup</code> operation.
**/
export class DeleteBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;
}
