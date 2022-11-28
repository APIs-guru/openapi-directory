import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// DeleteFileSystemLustreResponse
/** 
 * The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemLustreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FinalBackupId" })
  finalBackupId?: string;

  @SpeakeasyMetadata({ data: "json, name=FinalBackupTags", elemType: Tag })
  finalBackupTags?: Tag[];
}
