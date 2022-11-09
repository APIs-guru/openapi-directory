import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeleteFileSystemLustreConfiguration } from "./deletefilesystemlustreconfiguration";
import { DeleteFileSystemWindowsConfiguration } from "./deletefilesystemwindowsconfiguration";


// DeleteFileSystemRequest
/** 
 * The request object for <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: DeleteFileSystemLustreConfiguration;

  @Metadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: DeleteFileSystemWindowsConfiguration;
}
