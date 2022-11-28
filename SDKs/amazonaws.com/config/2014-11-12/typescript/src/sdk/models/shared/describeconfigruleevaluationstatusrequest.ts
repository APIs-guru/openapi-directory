import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeConfigRuleEvaluationStatusRequest
/** 
 * <p/>
**/
export class DescribeConfigRuleEvaluationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
