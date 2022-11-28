import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MappingRuleMatchTypeEnum } from "./mappingrulematchtypeenum";



// MappingRule
/** 
 * A rule that maps a claim name, a claim value, and a match type to a role ARN.
**/
export class MappingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Claim" })
  claim: string;

  @SpeakeasyMetadata({ data: "json, name=MatchType" })
  matchType: MappingRuleMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
