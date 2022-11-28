import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystemLifecycleEnum } from "./filesystemlifecycleenum";
import { DeleteFileSystemLustreResponse } from "./deletefilesystemlustreresponse";
import { DeleteFileSystemWindowsResponse } from "./deletefilesystemwindowsresponse";



// DeleteFileSystemResponse
/** 
 * The response object for the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: FileSystemLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=LustreResponse" })
  lustreResponse?: DeleteFileSystemLustreResponse;

  @SpeakeasyMetadata({ data: "json, name=WindowsResponse" })
  windowsResponse?: DeleteFileSystemWindowsResponse;
}
