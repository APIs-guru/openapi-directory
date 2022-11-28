import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// BackupPolicy
/** 
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
**/
export class BackupPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: StatusEnum;
}
