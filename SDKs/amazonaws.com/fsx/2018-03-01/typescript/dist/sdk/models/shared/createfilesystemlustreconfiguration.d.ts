import { SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";
/**
 * The Lustre configuration for the file system being created.
**/
export declare class CreateFileSystemLustreConfiguration extends SpeakeasyBase {
    autoImportPolicy?: AutoImportPolicyTypeEnum;
    automaticBackupRetentionDays?: number;
    copyTagsToBackups?: boolean;
    dailyAutomaticBackupStartTime?: string;
    dataCompressionType?: DataCompressionTypeEnum;
    deploymentType?: LustreDeploymentTypeEnum;
    driveCacheType?: DriveCacheTypeEnum;
    exportPath?: string;
    importPath?: string;
    importedFileChunkSize?: number;
    perUnitStorageThroughput?: number;
    weeklyMaintenanceStartTime?: string;
}
