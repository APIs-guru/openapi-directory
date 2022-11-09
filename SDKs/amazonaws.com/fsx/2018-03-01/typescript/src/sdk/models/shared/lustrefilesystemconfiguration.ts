import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { DataRepositoryConfiguration } from "./datarepositoryconfiguration";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";


// LustreFileSystemConfiguration
/** 
 * The configuration for the Amazon FSx for Lustre file system.
**/
export class LustreFileSystemConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @Metadata({ data: "json, name=CopyTagsToBackups" })
  copyTagsToBackups?: boolean;

  @Metadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @Metadata({ data: "json, name=DataCompressionType" })
  dataCompressionType?: DataCompressionTypeEnum;

  @Metadata({ data: "json, name=DataRepositoryConfiguration" })
  dataRepositoryConfiguration?: DataRepositoryConfiguration;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType?: LustreDeploymentTypeEnum;

  @Metadata({ data: "json, name=DriveCacheType" })
  driveCacheType?: DriveCacheTypeEnum;

  @Metadata({ data: "json, name=MountName" })
  mountName?: string;

  @Metadata({ data: "json, name=PerUnitStorageThroughput" })
  perUnitStorageThroughput?: number;

  @Metadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
