import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystem } from "./filesystem";



// CreateFileSystemFromBackupResponse
/** 
 * The response object for the <code>CreateFileSystemFromBackup</code> operation.
**/
export class CreateFileSystemFromBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystem" })
  fileSystem?: FileSystem;
}
