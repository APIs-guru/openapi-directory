import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";


// Ec2InstanceLimit
/** 
 * <p>The GameLift service limits for an EC2 instance type and current utilization. GameLift allows AWS accounts a maximum number of instances, per instance type, per AWS Region or location, for use with GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the GameLift console.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeEC2InstanceLimits</a> </p>
**/
export class Ec2InstanceLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentInstances" })
  currentInstances?: number;

  @Metadata({ data: "json, name=EC2InstanceType" })
  ec2InstanceType?: Ec2InstanceTypeEnum;

  @Metadata({ data: "json, name=InstanceLimit" })
  instanceLimit?: number;

  @Metadata({ data: "json, name=Location" })
  location?: string;
}
