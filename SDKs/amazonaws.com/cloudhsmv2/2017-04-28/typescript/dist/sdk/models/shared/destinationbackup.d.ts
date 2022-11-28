import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.
**/
export declare class DestinationBackup extends SpeakeasyBase {
    createTimestamp?: Date;
    sourceBackup?: string;
    sourceCluster?: string;
    sourceRegion?: string;
}
