import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteBackupRequest
/** 
 * The request object for <code>DeleteBackup</code> operation.
**/
export class DeleteBackupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId: string;

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;
}
