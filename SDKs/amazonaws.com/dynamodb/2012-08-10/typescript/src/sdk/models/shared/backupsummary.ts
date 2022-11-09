import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupStatusEnum } from "./backupstatusenum";
import { BackupTypeEnum } from "./backuptypeenum";


// BackupSummary
/** 
 * Contains details for the backup.
**/
export class BackupSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupArn" })
  backupArn?: string;

  @Metadata({ data: "json, name=BackupCreationDateTime" })
  backupCreationDateTime?: Date;

  @Metadata({ data: "json, name=BackupExpiryDateTime" })
  backupExpiryDateTime?: Date;

  @Metadata({ data: "json, name=BackupName" })
  backupName?: string;

  @Metadata({ data: "json, name=BackupSizeBytes" })
  backupSizeBytes?: number;

  @Metadata({ data: "json, name=BackupStatus" })
  backupStatus?: BackupStatusEnum;

  @Metadata({ data: "json, name=BackupType" })
  backupType?: BackupTypeEnum;

  @Metadata({ data: "json, name=TableArn" })
  tableArn?: string;

  @Metadata({ data: "json, name=TableId" })
  tableId?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
