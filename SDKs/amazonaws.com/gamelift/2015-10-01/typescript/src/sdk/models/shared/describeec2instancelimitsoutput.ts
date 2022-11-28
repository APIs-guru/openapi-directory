import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceLimit } from "./ec2instancelimit";



// DescribeEc2InstanceLimitsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeEc2InstanceLimitsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EC2InstanceLimits", elemType: Ec2InstanceLimit })
  ec2InstanceLimits?: Ec2InstanceLimit[];
}
