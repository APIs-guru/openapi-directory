import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystem } from "./filesystem";



// CreateFileSystemResponse
/** 
 * The response object returned after the file system is created.
**/
export class CreateFileSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystem" })
  fileSystem?: FileSystem;
}
