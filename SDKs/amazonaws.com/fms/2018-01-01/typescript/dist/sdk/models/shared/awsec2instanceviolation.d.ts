import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2NetworkInterfaceViolation } from "./awsec2networkinterfaceviolation";
/**
 * Violation detail for an EC2 instance resource.
**/
export declare class AwsEc2InstanceViolation extends SpeakeasyBase {
    awsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];
    violationTarget?: string;
}
