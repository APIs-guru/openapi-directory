import { SpeakeasyBase } from "../../../internal/utils";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { DataRepositoryConfiguration } from "./datarepositoryconfiguration";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";
/**
 * The configuration for the Amazon FSx for Lustre file system.
**/
export declare class LustreFileSystemConfiguration extends SpeakeasyBase {
    automaticBackupRetentionDays?: number;
    copyTagsToBackups?: boolean;
    dailyAutomaticBackupStartTime?: string;
    dataCompressionType?: DataCompressionTypeEnum;
    dataRepositoryConfiguration?: DataRepositoryConfiguration;
    deploymentType?: LustreDeploymentTypeEnum;
    driveCacheType?: DriveCacheTypeEnum;
    mountName?: string;
    perUnitStorageThroughput?: number;
    weeklyMaintenanceStartTime?: string;
}
