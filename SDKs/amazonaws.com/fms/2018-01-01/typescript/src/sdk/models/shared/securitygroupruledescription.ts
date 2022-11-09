import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityGroupRuleDescription
/** 
 * Describes a set of permissions for a security group rule.
**/
export class SecurityGroupRuleDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromPort" })
  fromPort?: number;

  @Metadata({ data: "json, name=IPV4Range" })
  ipv4Range?: string;

  @Metadata({ data: "json, name=IPV6Range" })
  ipv6Range?: string;

  @Metadata({ data: "json, name=PrefixListId" })
  prefixListId?: string;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=ToPort" })
  toPort?: number;
}
