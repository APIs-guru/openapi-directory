import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { InstanceStatusEnum } from "./instancestatusenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";



// Instance
/** 
 * <p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeInstances</a> </p>
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InstanceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: Ec2InstanceTypeEnum;
}
