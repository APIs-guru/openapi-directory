import { SpeakeasyBase } from "../../../internal/utils";
import { BackupStateEnum } from "./backupstateenum";
import { Tag } from "./tag";
/**
 * Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.
**/
export declare class Backup extends SpeakeasyBase {
    backupId: string;
    backupState?: BackupStateEnum;
    clusterId?: string;
    copyTimestamp?: Date;
    createTimestamp?: Date;
    deleteTimestamp?: Date;
    neverExpires?: boolean;
    sourceBackup?: string;
    sourceCluster?: string;
    sourceRegion?: string;
    tagList?: Tag[];
}
