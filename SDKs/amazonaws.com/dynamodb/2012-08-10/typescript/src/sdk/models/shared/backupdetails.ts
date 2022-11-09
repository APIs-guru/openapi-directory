import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupStatusEnum } from "./backupstatusenum";
import { BackupTypeEnum } from "./backuptypeenum";


// BackupDetails
/** 
 * Contains the details of the backup created for the table.
**/
export class BackupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupArn" })
  backupArn: string;

  @Metadata({ data: "json, name=BackupCreationDateTime" })
  backupCreationDateTime: Date;

  @Metadata({ data: "json, name=BackupExpiryDateTime" })
  backupExpiryDateTime?: Date;

  @Metadata({ data: "json, name=BackupName" })
  backupName: string;

  @Metadata({ data: "json, name=BackupSizeBytes" })
  backupSizeBytes?: number;

  @Metadata({ data: "json, name=BackupStatus" })
  backupStatus: BackupStatusEnum;

  @Metadata({ data: "json, name=BackupType" })
  backupType: BackupTypeEnum;
}
