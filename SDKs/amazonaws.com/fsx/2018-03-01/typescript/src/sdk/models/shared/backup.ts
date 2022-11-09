import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=BackupId" })
  backupId: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=DirectoryInformation" })
  directoryInformation?: ActiveDirectoryBackupAttributes;

  @Metadata({ data: "json, name=FailureDetails" })
  failureDetails?: BackupFailureDetails;

  @Metadata({ data: "json, name=FileSystem" })
  fileSystem: FileSystem;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle: BackupLifecycleEnum;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=ProgressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=SourceBackupId" })
  sourceBackupId?: string;

  @Metadata({ data: "json, name=SourceBackupRegion" })
  sourceBackupRegion?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Type" })
  type: BackupTypeEnum;

  @Metadata({ data: "json, name=Volume" })
  volume?: Volume;
}
