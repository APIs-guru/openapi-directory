import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { InstanceStatusEnum } from "./instancestatusenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
/**
 * <p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeInstances</a> </p>
**/
export declare class Instance extends SpeakeasyBase {
    creationTime?: Date;
    dnsName?: string;
    fleetArn?: string;
    fleetId?: string;
    instanceId?: string;
    ipAddress?: string;
    location?: string;
    operatingSystem?: OperatingSystemEnum;
    status?: InstanceStatusEnum;
    type?: Ec2InstanceTypeEnum;
}
