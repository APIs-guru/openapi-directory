import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// DeleteFileSystemLustreConfiguration
/** 
 * The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
**/
export class DeleteFileSystemLustreConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=FinalBackupTags", elemType: shared.Tag })
  finalBackupTags?: Tag[];

  @Metadata({ data: "json, name=SkipFinalBackup" })
  skipFinalBackup?: boolean;
}
