import { SpeakeasyBase } from "../../../internal/utils";
import { OntapDeploymentTypeEnum } from "./ontapdeploymenttypeenum";
import { DiskIopsConfiguration } from "./diskiopsconfiguration";
/**
 * The ONTAP configuration properties of the FSx for NetApp ONTAP file system that you are creating.
**/
export declare class CreateFileSystemOntapConfiguration extends SpeakeasyBase {
    automaticBackupRetentionDays?: number;
    dailyAutomaticBackupStartTime?: string;
    deploymentType: OntapDeploymentTypeEnum;
    diskIopsConfiguration?: DiskIopsConfiguration;
    endpointIpAddressRange?: string;
    fsxAdminPassword?: string;
    preferredSubnetId?: string;
    routeTableIds?: string[];
    throughputCapacity: number;
    weeklyMaintenanceStartTime?: string;
}
