import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2NetworkInterfaceViolation } from "./awsec2networkinterfaceviolation";


// AwsEc2InstanceViolation
/** 
 * Violation detail for an EC2 instance resource.
**/
export class AwsEc2InstanceViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsEc2NetworkInterfaceViolations", elemType: shared.AwsEc2NetworkInterfaceViolation })
  awsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
