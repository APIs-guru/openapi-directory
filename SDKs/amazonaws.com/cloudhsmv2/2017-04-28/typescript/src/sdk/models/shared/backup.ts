import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupStateEnum } from "./backupstateenum";
import { Tag } from "./tag";



// Backup
/** 
 * Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;

  @SpeakeasyMetadata({ data: "json, name=BackupState" })
  backupState?: BackupStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=CopyTimestamp" })
  copyTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeleteTimestamp" })
  deleteTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=NeverExpires" })
  neverExpires?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SourceBackup" })
  sourceBackup?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceCluster" })
  sourceCluster?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceRegion" })
  sourceRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList?: Tag[];
}
