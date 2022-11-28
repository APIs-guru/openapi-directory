import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation.
**/
export declare class DeleteVolumeOntapResponse extends SpeakeasyBase {
    finalBackupId?: string;
    finalBackupTags?: Tag[];
}
