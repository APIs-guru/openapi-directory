import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// DeleteVolumeOntapConfiguration
/** 
 * Use to specify skipping a final backup, or to add tags to a final backup.
**/
export class DeleteVolumeOntapConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=FinalBackupTags", elemType: shared.Tag })
  finalBackupTags?: Tag[];

  @Metadata({ data: "json, name=SkipFinalBackup" })
  skipFinalBackup?: boolean;
}
