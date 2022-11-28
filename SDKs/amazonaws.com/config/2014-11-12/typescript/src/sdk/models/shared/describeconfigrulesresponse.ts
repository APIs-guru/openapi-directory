import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigRule } from "./configrule";



// DescribeConfigRulesResponse
/** 
 * <p/>
**/
export class DescribeConfigRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRules", elemType: ConfigRule })
  configRules?: ConfigRule[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
