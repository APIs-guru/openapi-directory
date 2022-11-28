import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IcmpTypeCode } from "./icmptypecode";
import { PortRange } from "./portrange";
import { RuleActionEnum } from "./ruleactionenum";



// NetworkAclEntry
/** 
 * Describes an entry in a network ACL.
**/
export class NetworkAclEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: string;

  @SpeakeasyMetadata()
  egress?: boolean;

  @SpeakeasyMetadata()
  icmpTypeCode?: IcmpTypeCode;

  @SpeakeasyMetadata()
  ipv6CidrBlock?: string;

  @SpeakeasyMetadata()
  portRange?: PortRange;

  @SpeakeasyMetadata()
  protocol?: string;

  @SpeakeasyMetadata()
  ruleAction?: RuleActionEnum;

  @SpeakeasyMetadata()
  ruleNumber?: number;
}
