import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";



// DescribeEc2InstanceLimitsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeEc2InstanceLimitsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EC2InstanceType" })
  ec2InstanceType?: Ec2InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;
}
