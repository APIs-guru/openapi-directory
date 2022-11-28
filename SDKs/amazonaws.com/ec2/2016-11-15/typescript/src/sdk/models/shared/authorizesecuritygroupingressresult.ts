import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroupRule } from "./securitygrouprule";



export class AuthorizeSecurityGroupIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  return?: boolean;

  @SpeakeasyMetadata({ elemType: SecurityGroupRule })
  securityGroupRules?: SecurityGroupRule[];
}
