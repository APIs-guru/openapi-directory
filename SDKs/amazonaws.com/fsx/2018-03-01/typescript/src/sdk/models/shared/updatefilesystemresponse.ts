import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystem } from "./filesystem";



// UpdateFileSystemResponse
/** 
 * The response object for the <code>UpdateFileSystem</code> operation.
**/
export class UpdateFileSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystem" })
  fileSystem?: FileSystem;
}
