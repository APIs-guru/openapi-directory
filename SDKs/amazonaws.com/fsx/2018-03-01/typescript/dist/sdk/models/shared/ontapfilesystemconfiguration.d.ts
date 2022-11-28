import { SpeakeasyBase } from "../../../internal/utils";
import { OntapDeploymentTypeEnum } from "./ontapdeploymenttypeenum";
import { DiskIopsConfiguration } from "./diskiopsconfiguration";
import { FileSystemEndpoints } from "./filesystemendpoints";
/**
 * Configuration for the FSx for NetApp ONTAP file system.
**/
export declare class OntapFileSystemConfiguration extends SpeakeasyBase {
    automaticBackupRetentionDays?: number;
    dailyAutomaticBackupStartTime?: string;
    deploymentType?: OntapDeploymentTypeEnum;
    diskIopsConfiguration?: DiskIopsConfiguration;
    endpointIpAddressRange?: string;
    endpoints?: FileSystemEndpoints;
    preferredSubnetId?: string;
    routeTableIds?: string[];
    throughputCapacity?: number;
    weeklyMaintenanceStartTime?: string;
}
