import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// DeleteFileSystemLustreConfiguration
/** 
 * The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemLustreConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FinalBackupTags", elemType: Tag })
  finalBackupTags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=SkipFinalBackup" })
  skipFinalBackup?: boolean;
}
