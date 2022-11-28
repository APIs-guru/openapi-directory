import { SpeakeasyBase } from "../../../internal/utils";
import { BackupLifecycleEnum } from "./backuplifecycleenum";
/**
 * The response object for <code>DeleteBackup</code> operation.
**/
export declare class DeleteBackupResponse extends SpeakeasyBase {
    backupId?: string;
    lifecycle?: BackupLifecycleEnum;
}
