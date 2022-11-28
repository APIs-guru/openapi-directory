import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupStatusEnum } from "./backupstatusenum";
import { BackupTypeEnum } from "./backuptypeenum";



// BackupDetails
/** 
 * Contains the details of the backup created for the table.
**/
export class BackupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupArn" })
  backupArn: string;

  @SpeakeasyMetadata({ data: "json, name=BackupCreationDateTime" })
  backupCreationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=BackupExpiryDateTime" })
  backupExpiryDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=BackupName" })
  backupName: string;

  @SpeakeasyMetadata({ data: "json, name=BackupSizeBytes" })
  backupSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=BackupStatus" })
  backupStatus: BackupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=BackupType" })
  backupType: BackupTypeEnum;
}
