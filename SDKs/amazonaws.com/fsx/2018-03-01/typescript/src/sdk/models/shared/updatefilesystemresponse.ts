import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileSystem } from "./filesystem";


// UpdateFileSystemResponse
/** 
 * The response object for the <code>UpdateFileSystem</code> operation.
**/
export class UpdateFileSystemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystem" })
  fileSystem?: FileSystem;
}
