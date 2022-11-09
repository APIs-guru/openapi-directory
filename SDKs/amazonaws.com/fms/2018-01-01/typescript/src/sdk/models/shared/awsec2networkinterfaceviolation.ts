import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2NetworkInterfaceViolation
/** 
 * Violation detail for network interfaces associated with an EC2 instance.
**/
export class AwsEc2NetworkInterfaceViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ViolatingSecurityGroups" })
  violatingSecurityGroups?: string[];

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
