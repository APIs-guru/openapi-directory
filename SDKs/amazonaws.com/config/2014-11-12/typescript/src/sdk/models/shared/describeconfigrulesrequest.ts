import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeConfigRulesRequest
/** 
 * <p/>
**/
export class DescribeConfigRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
