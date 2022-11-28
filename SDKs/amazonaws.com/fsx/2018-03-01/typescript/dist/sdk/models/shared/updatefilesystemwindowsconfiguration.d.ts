import { SpeakeasyBase } from "../../../internal/utils";
import { WindowsAuditLogCreateConfiguration } from "./windowsauditlogcreateconfiguration";
import { SelfManagedActiveDirectoryConfigurationUpdates } from "./selfmanagedactivedirectoryconfigurationupdates";
/**
 * Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request.
**/
export declare class UpdateFileSystemWindowsConfiguration extends SpeakeasyBase {
    auditLogConfiguration?: WindowsAuditLogCreateConfiguration;
    automaticBackupRetentionDays?: number;
    dailyAutomaticBackupStartTime?: string;
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
    throughputCapacity?: number;
    weeklyMaintenanceStartTime?: string;
}
