import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFileSystemLustreConfiguration } from "./deletefilesystemlustreconfiguration";
import { DeleteFileSystemWindowsConfiguration } from "./deletefilesystemwindowsconfiguration";
/**
 * The request object for <code>DeleteFileSystem</code> operation.
**/
export declare class DeleteFileSystemRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemId: string;
    lustreConfiguration?: DeleteFileSystemLustreConfiguration;
    windowsConfiguration?: DeleteFileSystemWindowsConfiguration;
}
