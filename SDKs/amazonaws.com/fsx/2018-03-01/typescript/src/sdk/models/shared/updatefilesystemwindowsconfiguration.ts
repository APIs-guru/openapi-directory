import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WindowsAuditLogCreateConfiguration } from "./windowsauditlogcreateconfiguration";
import { SelfManagedActiveDirectoryConfigurationUpdates } from "./selfmanagedactivedirectoryconfigurationupdates";



// UpdateFileSystemWindowsConfiguration
/** 
 * Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request.
**/
export class UpdateFileSystemWindowsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuditLogConfiguration" })
  auditLogConfiguration?: WindowsAuditLogCreateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;

  @SpeakeasyMetadata({ data: "json, name=ThroughputCapacity" })
  throughputCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
