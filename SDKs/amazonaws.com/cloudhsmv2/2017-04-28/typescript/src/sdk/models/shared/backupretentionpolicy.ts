import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupRetentionTypeEnum } from "./backupretentiontypeenum";



// BackupRetentionPolicy
/** 
 * A policy that defines the number of days to retain backups.
**/
export class BackupRetentionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: BackupRetentionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
