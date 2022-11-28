import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";



// UpdateFileSystemLustreConfiguration
/** 
 * The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.
**/
export class UpdateFileSystemLustreConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoImportPolicy" })
  autoImportPolicy?: AutoImportPolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DataCompressionType" })
  dataCompressionType?: DataCompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
