import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OntapDeploymentTypeEnum } from "./ontapdeploymenttypeenum";
import { DiskIopsConfiguration } from "./diskiopsconfiguration";


// CreateFileSystemOntapConfiguration
/** 
 * The ONTAP configuration properties of the FSx for NetApp ONTAP file system that you are creating.
**/
export class CreateFileSystemOntapConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @Metadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType: OntapDeploymentTypeEnum;

  @Metadata({ data: "json, name=DiskIopsConfiguration" })
  diskIopsConfiguration?: DiskIopsConfiguration;

  @Metadata({ data: "json, name=EndpointIpAddressRange" })
  endpointIpAddressRange?: string;

  @Metadata({ data: "json, name=FsxAdminPassword" })
  fsxAdminPassword?: string;

  @Metadata({ data: "json, name=PreferredSubnetId" })
  preferredSubnetId?: string;

  @Metadata({ data: "json, name=RouteTableIds" })
  routeTableIds?: string[];

  @Metadata({ data: "json, name=ThroughputCapacity" })
  throughputCapacity: number;

  @Metadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
