import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";



// AnalysisAclRule
/** 
 * Describes a network access control (ACL) rule.
**/
export class AnalysisAclRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: string;

  @SpeakeasyMetadata()
  egress?: boolean;

  @SpeakeasyMetadata()
  portRange?: PortRange;

  @SpeakeasyMetadata()
  protocol?: string;

  @SpeakeasyMetadata()
  ruleAction?: string;

  @SpeakeasyMetadata()
  ruleNumber?: number;
}
