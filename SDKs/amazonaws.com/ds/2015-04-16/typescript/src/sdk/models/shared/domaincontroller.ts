import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainControllerStatusEnum } from "./domaincontrollerstatusenum";


// DomainController
/** 
 * Contains information about the domain controllers for a specified directory.
**/
export class DomainController extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=DnsIpAddr" })
  dnsIpAddr?: string;

  @Metadata({ data: "json, name=DomainControllerId" })
  domainControllerId?: string;

  @Metadata({ data: "json, name=LaunchTime" })
  launchTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: DomainControllerStatusEnum;

  @Metadata({ data: "json, name=StatusLastUpdatedDateTime" })
  statusLastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
