import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Backup } from "./backup";


// CreateBackupResponse
/** 
 * The response object for the <code>CreateBackup</code> operation.
**/
export class CreateBackupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Backup" })
  backup?: Backup;
}
