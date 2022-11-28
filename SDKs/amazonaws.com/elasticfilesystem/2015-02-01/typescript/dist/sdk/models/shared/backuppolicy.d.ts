import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
**/
export declare class BackupPolicy extends SpeakeasyBase {
    status: StatusEnum;
}
