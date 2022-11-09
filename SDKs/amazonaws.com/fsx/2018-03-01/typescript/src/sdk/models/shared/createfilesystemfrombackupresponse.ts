import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileSystem } from "./filesystem";


// CreateFileSystemFromBackupResponse
/** 
 * The response object for the <code>CreateFileSystemFromBackup</code> operation.
**/
export class CreateFileSystemFromBackupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystem" })
  fileSystem?: FileSystem;
}
