import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



// CreateBackupResponse
/** 
 * The response object for the <code>CreateBackup</code> operation.
**/
export class CreateBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backup" })
  backup?: Backup;
}
