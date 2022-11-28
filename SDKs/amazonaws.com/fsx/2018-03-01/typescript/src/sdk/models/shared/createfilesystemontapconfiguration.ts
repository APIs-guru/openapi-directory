import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OntapDeploymentTypeEnum } from "./ontapdeploymenttypeenum";
import { DiskIopsConfiguration } from "./diskiopsconfiguration";



// CreateFileSystemOntapConfiguration
/** 
 * The ONTAP configuration properties of the FSx for NetApp ONTAP file system that you are creating.
**/
export class CreateFileSystemOntapConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" })
  automaticBackupRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" })
  dailyAutomaticBackupStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType: OntapDeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DiskIopsConfiguration" })
  diskIopsConfiguration?: DiskIopsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=EndpointIpAddressRange" })
  endpointIpAddressRange?: string;

  @SpeakeasyMetadata({ data: "json, name=FsxAdminPassword" })
  fsxAdminPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredSubnetId" })
  preferredSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteTableIds" })
  routeTableIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ThroughputCapacity" })
  throughputCapacity: number;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" })
  weeklyMaintenanceStartTime?: string;
}
