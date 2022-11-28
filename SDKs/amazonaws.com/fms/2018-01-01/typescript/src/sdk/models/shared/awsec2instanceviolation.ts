import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2NetworkInterfaceViolation } from "./awsec2networkinterfaceviolation";



// AwsEc2InstanceViolation
/** 
 * Violation detail for an EC2 instance resource.
**/
export class AwsEc2InstanceViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsEc2NetworkInterfaceViolations", elemType: AwsEc2NetworkInterfaceViolation })
  awsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
