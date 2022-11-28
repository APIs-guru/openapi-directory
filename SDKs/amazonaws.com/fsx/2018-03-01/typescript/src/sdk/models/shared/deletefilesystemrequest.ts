import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteFileSystemLustreConfiguration } from "./deletefilesystemlustreconfiguration";
import { DeleteFileSystemWindowsConfiguration } from "./deletefilesystemwindowsconfiguration";



// DeleteFileSystemRequest
/** 
 * The request object for <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: DeleteFileSystemLustreConfiguration;

  @SpeakeasyMetadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: DeleteFileSystemWindowsConfiguration;
}
