import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ActiveDirectoryId" })
  activeDirectoryId?: string;

  @Metadata({ data: "json, name=Aliases", elemType: shared.Alias })
  aliases?: Alias[];

  @Metadata({ data: "json, name=AuditLogConfiguration" })
  auditLogConfiguration?: WindowsAuditLogConfiguration;

  @Metadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @Metadata({ data: "json, name=CopyTagsToBackups" })
  copyTagsToBackups?: boolean;

  @Metadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType?: WindowsDeploymentTypeEnum;

  @Metadata({ data: "json, name=MaintenanceOperationsInProgress" })
  maintenanceOperationsInProgress?: FileSystemMaintenanceOperationEnum[];

  @Metadata({ data: "json, name=PreferredFileServerIp" })
  preferredFileServerIp?: string;

  @Metadata({ data: "json, name=PreferredSubnetId" })
  preferredSubnetId?: string;

  @Metadata({ data: "json, name=RemoteAdministrationEndpoint" })
  remoteAdministrationEndpoint?: string;

  @Metadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;

  @Metadata({ data: "json, name=ThroughputCapacity" })
  throughputCapacity?: number;

  @Metadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
