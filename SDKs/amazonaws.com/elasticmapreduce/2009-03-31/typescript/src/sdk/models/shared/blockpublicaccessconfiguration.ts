import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";



// BlockPublicAccessConfiguration
/** 
 * A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>.
**/
export class BlockPublicAccessConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockPublicSecurityGroupRules" })
  blockPublicSecurityGroupRules: boolean;

  @SpeakeasyMetadata({ data: "json, name=PermittedPublicSecurityGroupRuleRanges", elemType: PortRange })
  permittedPublicSecurityGroupRuleRanges?: PortRange[];
}
