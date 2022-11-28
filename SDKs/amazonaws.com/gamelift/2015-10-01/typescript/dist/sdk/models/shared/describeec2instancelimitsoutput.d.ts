import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceLimit } from "./ec2instancelimit";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeEc2InstanceLimitsOutput extends SpeakeasyBase {
    ec2InstanceLimits?: Ec2InstanceLimit[];
}
