import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";



// AnalysisSecurityGroupRule
/** 
 * Describes a security group rule.
**/
export class AnalysisSecurityGroupRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: string;

  @SpeakeasyMetadata()
  direction?: string;

  @SpeakeasyMetadata()
  portRange?: PortRange;

  @SpeakeasyMetadata()
  prefixListId?: string;

  @SpeakeasyMetadata()
  protocol?: string;

  @SpeakeasyMetadata()
  securityGroupId?: string;
}
