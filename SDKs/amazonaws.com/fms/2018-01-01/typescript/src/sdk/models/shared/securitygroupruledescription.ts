import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityGroupRuleDescription
/** 
 * Describes a set of permissions for a security group rule.
**/
export class SecurityGroupRuleDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "json, name=IPV4Range" })
  ipv4Range?: string;

  @SpeakeasyMetadata({ data: "json, name=IPV6Range" })
  ipv6Range?: string;

  @SpeakeasyMetadata({ data: "json, name=PrefixListId" })
  prefixListId?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=ToPort" })
  toPort?: number;
}
