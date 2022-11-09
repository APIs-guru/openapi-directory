import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// DeleteFileSystemWindowsResponse
/** 
 * The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemWindowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FinalBackupId" })
  finalBackupId?: string;

  @Metadata({ data: "json, name=FinalBackupTags", elemType: shared.Tag })
  finalBackupTags?: Tag[];
}
