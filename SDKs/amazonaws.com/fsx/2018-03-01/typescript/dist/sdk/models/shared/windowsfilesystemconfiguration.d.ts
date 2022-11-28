import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { WindowsAuditLogConfiguration } from "./windowsauditlogconfiguration";
import { WindowsDeploymentTypeEnum } from "./windowsdeploymenttypeenum";
import { FileSystemMaintenanceOperationEnum } from "./filesystemmaintenanceoperationenum";
import { SelfManagedActiveDirectoryAttributes } from "./selfmanagedactivedirectoryattributes";
/**
 * The configuration for this Microsoft Windows file system.
**/
export declare class WindowsFileSystemConfiguration extends SpeakeasyBase {
    activeDirectoryId?: string;
    aliases?: Alias[];
    auditLogConfiguration?: WindowsAuditLogConfiguration;
    automaticBackupRetentionDays?: number;
    copyTagsToBackups?: boolean;
    dailyAutomaticBackupStartTime?: string;
    deploymentType?: WindowsDeploymentTypeEnum;
    maintenanceOperationsInProgress?: FileSystemMaintenanceOperationEnum[];
    preferredFileServerIp?: string;
    preferredSubnetId?: string;
    remoteAdministrationEndpoint?: string;
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
    throughputCapacity?: number;
    weeklyMaintenanceStartTime?: string;
}
