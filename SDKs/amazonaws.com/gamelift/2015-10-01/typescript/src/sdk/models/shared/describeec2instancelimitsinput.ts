import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";


// DescribeEc2InstanceLimitsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeEc2InstanceLimitsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EC2InstanceType" })
  ec2InstanceType?: Ec2InstanceTypeEnum;

  @Metadata({ data: "json, name=Location" })
  location?: string;
}
