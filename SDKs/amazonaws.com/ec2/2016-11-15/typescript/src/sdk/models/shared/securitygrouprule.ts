import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReferencedSecurityGroup } from "./referencedsecuritygroup";
import { Tag } from "./tag";



// SecurityGroupRule
/** 
 * Describes a security group rule.
**/
export class SecurityGroupRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrIpv4?: string;

  @SpeakeasyMetadata()
  cidrIpv6?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  fromPort?: number;

  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  groupOwnerId?: string;

  @SpeakeasyMetadata()
  ipProtocol?: string;

  @SpeakeasyMetadata()
  isEgress?: boolean;

  @SpeakeasyMetadata()
  prefixListId?: string;

  @SpeakeasyMetadata()
  referencedGroupInfo?: ReferencedSecurityGroup;

  @SpeakeasyMetadata()
  securityGroupRuleId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  toPort?: number;
}
