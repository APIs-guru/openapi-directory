import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { WindowsAuditLogConfiguration } from "./windowsauditlogconfiguration";
import { WindowsDeploymentTypeEnum } from "./windowsdeploymenttypeenum";
import { FileSystemMaintenanceOperationEnum } from "./filesystemmaintenanceoperationenum";
import { SelfManagedActiveDirectoryAttributes } from "./selfmanagedactivedirectoryattributes";



// WindowsFileSystemConfiguration
/** 
 * The configuration for this Microsoft Windows file system.
**/
export class WindowsFileSystemConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveDirectoryId" })
  activeDirectoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=Aliases", elemType: Alias })
  aliases?: Alias[];

  @SpeakeasyMetadata({ data: "json, name=AuditLogConfiguration" })
  auditLogConfiguration?: WindowsAuditLogConfiguration;

  @SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=CopyTagsToBackups" })
  copyTagsToBackups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType?: WindowsDeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceOperationsInProgress" })
  maintenanceOperationsInProgress?: FileSystemMaintenanceOperationEnum[];

  @SpeakeasyMetadata({ data: "json, name=PreferredFileServerIp" })
  preferredFileServerIp?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredSubnetId" })
  preferredSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteAdministrationEndpoint" })
  remoteAdministrationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;

  @SpeakeasyMetadata({ data: "json, name=ThroughputCapacity" })
  throughputCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
