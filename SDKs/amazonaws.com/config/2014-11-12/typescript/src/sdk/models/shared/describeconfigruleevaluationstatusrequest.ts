import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeConfigRuleEvaluationStatusRequest
/** 
 * <p/>
**/
export class DescribeConfigRuleEvaluationStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
