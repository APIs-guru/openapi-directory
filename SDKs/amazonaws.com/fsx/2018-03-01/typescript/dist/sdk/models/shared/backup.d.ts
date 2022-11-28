import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryBackupAttributes } from "./activedirectorybackupattributes";
import { BackupFailureDetails } from "./backupfailuredetails";
import { FileSystem } from "./filesystem";
import { BackupLifecycleEnum } from "./backuplifecycleenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
import { BackupTypeEnum } from "./backuptypeenum";
import { Volume } from "./volume";
/**
 * A backup of an Amazon FSx for Windows File Server or Amazon FSx for Lustre file system, or of an Amazon FSx for NetApp ONTAP volume.
**/
export declare class Backup extends SpeakeasyBase {
    backupId: string;
    creationTime: Date;
    directoryInformation?: ActiveDirectoryBackupAttributes;
    failureDetails?: BackupFailureDetails;
    fileSystem: FileSystem;
    kmsKeyId?: string;
    lifecycle: BackupLifecycleEnum;
    ownerId?: string;
    progressPercent?: number;
    resourceArn?: string;
    resourceType?: ResourceTypeEnum;
    sourceBackupId?: string;
    sourceBackupRegion?: string;
    tags?: Tag[];
    type: BackupTypeEnum;
    volume?: Volume;
}
