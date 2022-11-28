import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { DataRepositoryConfiguration } from "./datarepositoryconfiguration";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";



// LustreFileSystemConfiguration
/** 
 * The configuration for the Amazon FSx for Lustre file system.
**/
export class LustreFileSystemConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=CopyTagsToBackups" })
  copyTagsToBackups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DataCompressionType" })
  dataCompressionType?: DataCompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DataRepositoryConfiguration" })
  dataRepositoryConfiguration?: DataRepositoryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType?: LustreDeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DriveCacheType" })
  driveCacheType?: DriveCacheTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MountName" })
  mountName?: string;

  @SpeakeasyMetadata({ data: "json, name=PerUnitStorageThroughput" })
  perUnitStorageThroughput?: number;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
