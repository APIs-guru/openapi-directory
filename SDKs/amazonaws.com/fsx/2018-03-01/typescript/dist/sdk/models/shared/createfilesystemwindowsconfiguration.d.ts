import { SpeakeasyBase } from "../../../internal/utils";
import { WindowsAuditLogCreateConfiguration } from "./windowsauditlogcreateconfiguration";
import { WindowsDeploymentTypeEnum } from "./windowsdeploymenttypeenum";
import { SelfManagedActiveDirectoryConfiguration } from "./selfmanagedactivedirectoryconfiguration";
/**
 * The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.
**/
export declare class CreateFileSystemWindowsConfiguration extends SpeakeasyBase {
    activeDirectoryId?: string;
    aliases?: string[];
    auditLogConfiguration?: WindowsAuditLogCreateConfiguration;
    automaticBackupRetentionDays?: number;
    copyTagsToBackups?: boolean;
    dailyAutomaticBackupStartTime?: string;
    deploymentType?: WindowsDeploymentTypeEnum;
    preferredSubnetId?: string;
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
    throughputCapacity: number;
    weeklyMaintenanceStartTime?: string;
}
