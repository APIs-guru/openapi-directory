import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// DeleteFileSystemWindowsResponse
/** 
 * The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemWindowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FinalBackupId" })
  finalBackupId?: string;

  @SpeakeasyMetadata({ data: "json, name=FinalBackupTags", elemType: Tag })
  finalBackupTags?: Tag[];
}
