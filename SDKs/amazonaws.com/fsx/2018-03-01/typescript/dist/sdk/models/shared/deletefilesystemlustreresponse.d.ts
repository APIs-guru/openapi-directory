import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
**/
export declare class DeleteFileSystemLustreResponse extends SpeakeasyBase {
    finalBackupId?: string;
    finalBackupTags?: Tag[];
}
