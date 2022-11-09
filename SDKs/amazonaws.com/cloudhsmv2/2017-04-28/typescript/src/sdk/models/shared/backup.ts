import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackupStateEnum } from "./backupstateenum";
import { Tag } from "./tag";


// Backup
/** 
 * Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId: string;

  @Metadata({ data: "json, name=BackupState" })
  backupState?: BackupStateEnum;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=CopyTimestamp" })
  copyTimestamp?: Date;

  @Metadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @Metadata({ data: "json, name=DeleteTimestamp" })
  deleteTimestamp?: Date;

  @Metadata({ data: "json, name=NeverExpires" })
  neverExpires?: boolean;

  @Metadata({ data: "json, name=SourceBackup" })
  sourceBackup?: string;

  @Metadata({ data: "json, name=SourceCluster" })
  sourceCluster?: string;

  @Metadata({ data: "json, name=SourceRegion" })
  sourceRegion?: string;

  @Metadata({ data: "json, name=TagList", elemType: shared.Tag })
  tagList?: Tag[];
}
