import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";


// CreateFileSystemLustreConfiguration
/** 
 * The Lustre configuration for the file system being created. 
**/
export class CreateFileSystemLustreConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoImportPolicy" })
  autoImportPolicy?: AutoImportPolicyTypeEnum;

  @Metadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @Metadata({ data: "json, name=CopyTagsToBackups" })
  copyTagsToBackups?: boolean;

  @Metadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @Metadata({ data: "json, name=DataCompressionType" })
  dataCompressionType?: DataCompressionTypeEnum;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType?: LustreDeploymentTypeEnum;

  @Metadata({ data: "json, name=DriveCacheType" })
  driveCacheType?: DriveCacheTypeEnum;

  @Metadata({ data: "json, name=ExportPath" })
  exportPath?: string;

  @Metadata({ data: "json, name=ImportPath" })
  importPath?: string;

  @Metadata({ data: "json, name=ImportedFileChunkSize" })
  importedFileChunkSize?: number;

  @Metadata({ data: "json, name=PerUnitStorageThroughput" })
  perUnitStorageThroughput?: number;

  @Metadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
