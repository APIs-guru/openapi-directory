import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MappingRuleMatchTypeEnum } from "./mappingrulematchtypeenum";


// MappingRule
/** 
 * A rule that maps a claim name, a claim value, and a match type to a role ARN.
**/
export class MappingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Claim" })
  claim: string;

  @Metadata({ data: "json, name=MatchType" })
  matchType: MappingRuleMatchTypeEnum;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
