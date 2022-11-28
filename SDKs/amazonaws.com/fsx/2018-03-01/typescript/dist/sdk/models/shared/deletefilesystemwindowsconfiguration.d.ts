import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
**/
export declare class DeleteFileSystemWindowsConfiguration extends SpeakeasyBase {
    finalBackupTags?: Tag[];
    skipFinalBackup?: boolean;
}
