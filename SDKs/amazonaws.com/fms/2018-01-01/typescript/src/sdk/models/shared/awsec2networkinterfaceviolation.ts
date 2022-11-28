import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2NetworkInterfaceViolation
/** 
 * Violation detail for network interfaces associated with an EC2 instance.
**/
export class AwsEc2NetworkInterfaceViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ViolatingSecurityGroups" })
  violatingSecurityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
