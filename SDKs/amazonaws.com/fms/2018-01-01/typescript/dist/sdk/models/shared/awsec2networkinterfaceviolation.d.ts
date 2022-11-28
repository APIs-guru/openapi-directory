import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Violation detail for network interfaces associated with an EC2 instance.
**/
export declare class AwsEc2NetworkInterfaceViolation extends SpeakeasyBase {
    violatingSecurityGroups?: string[];
    violationTarget?: string;
}
