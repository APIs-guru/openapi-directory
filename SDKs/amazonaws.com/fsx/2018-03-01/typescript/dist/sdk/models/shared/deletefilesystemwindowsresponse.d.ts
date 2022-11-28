import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
**/
export declare class DeleteFileSystemWindowsResponse extends SpeakeasyBase {
    finalBackupId?: string;
    finalBackupTags?: Tag[];
}
