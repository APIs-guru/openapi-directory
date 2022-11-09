import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";


// UpdateFileSystemLustreConfiguration
/** 
 * The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.
**/
export class UpdateFileSystemLustreConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoImportPolicy" })
  autoImportPolicy?: AutoImportPolicyTypeEnum;

  @Metadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @Metadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @Metadata({ data: "json, name=DataCompressionType" })
  dataCompressionType?: DataCompressionTypeEnum;

  @Metadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
