import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";



// CreateFileSystemLustreConfiguration
/** 
 * The Lustre configuration for the file system being created. 
**/
export class CreateFileSystemLustreConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoImportPolicy" })
  autoImportPolicy?: AutoImportPolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=CopyTagsToBackups" })
  copyTagsToBackups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DataCompressionType" })
  dataCompressionType?: DataCompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType?: LustreDeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DriveCacheType" })
  driveCacheType?: DriveCacheTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ExportPath" })
  exportPath?: string;

  @SpeakeasyMetadata({ data: "json, name=ImportPath" })
  importPath?: string;

  @SpeakeasyMetadata({ data: "json, name=ImportedFileChunkSize" })
  importedFileChunkSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PerUnitStorageThroughput" })
  perUnitStorageThroughput?: number;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
