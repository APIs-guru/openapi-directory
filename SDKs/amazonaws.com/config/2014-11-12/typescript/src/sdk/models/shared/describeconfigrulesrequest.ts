import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeConfigRulesRequest
/** 
 * <p/>
**/
export class DescribeConfigRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
