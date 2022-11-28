import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WindowsAuditLogCreateConfiguration } from "./windowsauditlogcreateconfiguration";
import { WindowsDeploymentTypeEnum } from "./windowsdeploymenttypeenum";
import { SelfManagedActiveDirectoryConfiguration } from "./selfmanagedactivedirectoryconfiguration";



// CreateFileSystemWindowsConfiguration
/** 
 * The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.
**/
export class CreateFileSystemWindowsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveDirectoryId" })
  activeDirectoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=Aliases" })
  aliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=AuditLogConfiguration" })
  auditLogConfiguration?: WindowsAuditLogCreateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=CopyTagsToBackups" })
  copyTagsToBackups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType?: WindowsDeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PreferredSubnetId" })
  preferredSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ThroughputCapacity" })
  throughputCapacity: number;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
