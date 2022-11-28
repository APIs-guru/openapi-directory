import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// DeleteVolumeOntapConfiguration
/** 
 * Use to specify skipping a final backup, or to add tags to a final backup.
**/
export class DeleteVolumeOntapConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FinalBackupTags", elemType: Tag })
  finalBackupTags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=SkipFinalBackup" })
  skipFinalBackup?: boolean;
}
