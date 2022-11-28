import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainControllerStatusEnum } from "./domaincontrollerstatusenum";



// DomainController
/** 
 * Contains information about the domain controllers for a specified directory.
**/
export class DomainController extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsIpAddr" })
  dnsIpAddr?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainControllerId" })
  domainControllerId?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchTime" })
  launchTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DomainControllerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusLastUpdatedDateTime" })
  statusLastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
