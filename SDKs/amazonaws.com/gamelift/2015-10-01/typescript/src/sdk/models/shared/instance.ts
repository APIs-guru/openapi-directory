import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { InstanceStatusEnum } from "./instancestatusenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";


// Instance
/** 
 * <p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeInstances</a> </p>
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @Metadata({ data: "json, name=Status" })
  status?: InstanceStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: Ec2InstanceTypeEnum;
}
