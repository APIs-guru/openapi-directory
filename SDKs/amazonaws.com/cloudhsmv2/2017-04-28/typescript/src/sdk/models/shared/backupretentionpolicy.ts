import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupRetentionTypeEnum } from "./backupretentiontypeenum";


// BackupRetentionPolicy
/** 
 * A policy that defines the number of days to retain backups.
**/
export class BackupRetentionPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: BackupRetentionTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
