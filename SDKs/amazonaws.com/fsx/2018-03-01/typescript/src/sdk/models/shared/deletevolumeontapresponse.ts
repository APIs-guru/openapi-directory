import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// DeleteVolumeOntapResponse
/** 
 * The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation.
**/
export class DeleteVolumeOntapResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FinalBackupId" })
  finalBackupId?: string;

  @Metadata({ data: "json, name=FinalBackupTags", elemType: shared.Tag })
  finalBackupTags?: Tag[];
}
