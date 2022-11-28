import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryBackupAttributes } from "./activedirectorybackupattributes";
import { BackupFailureDetails } from "./backupfailuredetails";
import { FileSystem } from "./filesystem";
import { BackupLifecycleEnum } from "./backuplifecycleenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
import { BackupTypeEnum } from "./backuptypeenum";
import { Volume } from "./volume";



// Backup
/** 
 * A backup of an Amazon FSx for Windows File Server or Amazon FSx for Lustre file system, or of an Amazon FSx for NetApp ONTAP volume.
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DirectoryInformation" })
  directoryInformation?: ActiveDirectoryBackupAttributes;

  @SpeakeasyMetadata({ data: "json, name=FailureDetails" })
  failureDetails?: BackupFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=FileSystem" })
  fileSystem: FileSystem;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle: BackupLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressPercent" })
  progressPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceBackupId" })
  sourceBackupId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceBackupRegion" })
  sourceBackupRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: BackupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Volume" })
  volume?: Volume;
}
