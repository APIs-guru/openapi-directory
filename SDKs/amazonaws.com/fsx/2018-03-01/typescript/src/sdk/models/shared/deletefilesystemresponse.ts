import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileSystemLifecycleEnum } from "./filesystemlifecycleenum";
import { DeleteFileSystemLustreResponse } from "./deletefilesystemlustreresponse";
import { DeleteFileSystemWindowsResponse } from "./deletefilesystemwindowsresponse";


// DeleteFileSystemResponse
/** 
 * The response object for the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: FileSystemLifecycleEnum;

  @Metadata({ data: "json, name=LustreResponse" })
  lustreResponse?: DeleteFileSystemLustreResponse;

  @Metadata({ data: "json, name=WindowsResponse" })
  windowsResponse?: DeleteFileSystemWindowsResponse;
}
