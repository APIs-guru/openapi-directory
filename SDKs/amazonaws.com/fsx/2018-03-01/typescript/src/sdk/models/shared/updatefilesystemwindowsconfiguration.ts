import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WindowsAuditLogCreateConfiguration } from "./windowsauditlogcreateconfiguration";
import { SelfManagedActiveDirectoryConfigurationUpdates } from "./selfmanagedactivedirectoryconfigurationupdates";


// UpdateFileSystemWindowsConfiguration
/** 
 * Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request.
**/
export class UpdateFileSystemWindowsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditLogConfiguration" })
  auditLogConfiguration?: WindowsAuditLogCreateConfiguration;

  @Metadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @Metadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @Metadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;

  @Metadata({ data: "json, name=ThroughputCapacity" })
  throughputCapacity?: number;

  @Metadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
