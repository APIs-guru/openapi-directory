import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
**/
export declare class DeleteFileSystemLustreConfiguration extends SpeakeasyBase {
    finalBackupTags?: Tag[];
    skipFinalBackup?: boolean;
}
