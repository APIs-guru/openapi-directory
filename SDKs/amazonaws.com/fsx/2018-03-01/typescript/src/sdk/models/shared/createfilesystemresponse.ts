import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileSystem } from "./filesystem";


// CreateFileSystemResponse
/** 
 * The response object returned after the file system is created.
**/
export class CreateFileSystemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystem" })
  fileSystem?: FileSystem;
}
