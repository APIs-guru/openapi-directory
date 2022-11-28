import { SpeakeasyBase } from "../../../internal/utils";
import { BackupRetentionTypeEnum } from "./backupretentiontypeenum";
/**
 * A policy that defines the number of days to retain backups.
**/
export declare class BackupRetentionPolicy extends SpeakeasyBase {
    type?: BackupRetentionTypeEnum;
    value?: string;
}
