import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemLifecycleEnum } from "./filesystemlifecycleenum";
import { DeleteFileSystemLustreResponse } from "./deletefilesystemlustreresponse";
import { DeleteFileSystemWindowsResponse } from "./deletefilesystemwindowsresponse";
/**
 * The response object for the <code>DeleteFileSystem</code> operation.
**/
export declare class DeleteFileSystemResponse extends SpeakeasyBase {
    fileSystemId?: string;
    lifecycle?: FileSystemLifecycleEnum;
    lustreResponse?: DeleteFileSystemLustreResponse;
    windowsResponse?: DeleteFileSystemWindowsResponse;
}
