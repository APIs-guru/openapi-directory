import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// DeleteFileSystemWindowsConfiguration
/** 
 * The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemWindowsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=FinalBackupTags", elemType: shared.Tag })
  finalBackupTags?: Tag[];

  @Metadata({ data: "json, name=SkipFinalBackup" })
  skipFinalBackup?: boolean;
}
