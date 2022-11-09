import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// DeleteFileSystemLustreResponse
/** 
 * The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemLustreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FinalBackupId" })
  finalBackupId?: string;

  @Metadata({ data: "json, name=FinalBackupTags", elemType: shared.Tag })
  finalBackupTags?: Tag[];
}
