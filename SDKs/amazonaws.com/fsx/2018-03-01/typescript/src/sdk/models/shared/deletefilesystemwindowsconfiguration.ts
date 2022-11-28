import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// DeleteFileSystemWindowsConfiguration
/** 
 * The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemWindowsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FinalBackupTags", elemType: Tag })
  finalBackupTags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=SkipFinalBackup" })
  skipFinalBackup?: boolean;
}
