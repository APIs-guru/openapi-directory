import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupStatusEnum } from "./backupstatusenum";
import { BackupTypeEnum } from "./backuptypeenum";



// BackupSummary
/** 
 * Contains details for the backup.
**/
export class BackupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupArn" })
  backupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BackupCreationDateTime" })
  backupCreationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=BackupExpiryDateTime" })
  backupExpiryDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=BackupName" })
  backupName?: string;

  @SpeakeasyMetadata({ data: "json, name=BackupSizeBytes" })
  backupSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=BackupStatus" })
  backupStatus?: BackupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=BackupType" })
  backupType?: BackupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TableArn" })
  tableArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TableId" })
  tableId?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
