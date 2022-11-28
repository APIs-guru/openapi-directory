import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroupRule } from "./securitygrouprule";



export class DescribeSecurityGroupRulesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: SecurityGroupRule })
  securityGroupRules?: SecurityGroupRule[];
}
