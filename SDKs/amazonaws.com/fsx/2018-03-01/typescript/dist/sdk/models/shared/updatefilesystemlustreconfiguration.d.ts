import { SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
/**
 * The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.
**/
export declare class UpdateFileSystemLustreConfiguration extends SpeakeasyBase {
    autoImportPolicy?: AutoImportPolicyTypeEnum;
    automaticBackupRetentionDays?: number;
    dailyAutomaticBackupStartTime?: string;
    dataCompressionType?: DataCompressionTypeEnum;
    weeklyMaintenanceStartTime?: string;
}
