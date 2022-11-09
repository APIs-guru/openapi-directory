import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ec2InstanceLimit } from "./ec2instancelimit";


// DescribeEc2InstanceLimitsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeEc2InstanceLimitsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EC2InstanceLimits", elemType: shared.Ec2InstanceLimit })
  ec2InstanceLimits?: Ec2InstanceLimit[];
}
