import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// DeleteVolumeOntapResponse
/** 
 * The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation.
**/
export class DeleteVolumeOntapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FinalBackupId" })
  finalBackupId?: string;

  @SpeakeasyMetadata({ data: "json, name=FinalBackupTags", elemType: Tag })
  finalBackupTags?: Tag[];
}
