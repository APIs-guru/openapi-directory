import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Use to specify skipping a final backup, or to add tags to a final backup.
**/
export declare class DeleteVolumeOntapConfiguration extends SpeakeasyBase {
    finalBackupTags?: Tag[];
    skipFinalBackup?: boolean;
}
