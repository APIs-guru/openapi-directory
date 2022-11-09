import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WindowsAuditLogCreateConfiguration } from "./windowsauditlogcreateconfiguration";
import { WindowsDeploymentTypeEnum } from "./windowsdeploymenttypeenum";
import { SelfManagedActiveDirectoryConfiguration } from "./selfmanagedactivedirectoryconfiguration";


// CreateFileSystemWindowsConfiguration
/** 
 * The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.
**/
export class CreateFileSystemWindowsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveDirectoryId" })
  activeDirectoryId?: string;

  @Metadata({ data: "json, name=Aliases" })
  aliases?: string[];

  @Metadata({ data: "json, name=AuditLogConfiguration" })
  auditLogConfiguration?: WindowsAuditLogCreateConfiguration;

  @Metadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @Metadata({ data: "json, name=CopyTagsToBackups" })
  copyTagsToBackups?: boolean;

  @Metadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType?: WindowsDeploymentTypeEnum;

  @Metadata({ data: "json, name=PreferredSubnetId" })
  preferredSubnetId?: string;

  @Metadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;

  @Metadata({ data: "json, name=ThroughputCapacity" })
  throughputCapacity: number;

  @Metadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
