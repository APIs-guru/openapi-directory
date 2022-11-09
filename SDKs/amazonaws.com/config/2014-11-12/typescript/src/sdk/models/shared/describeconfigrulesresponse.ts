import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigRule } from "./configrule";


// DescribeConfigRulesResponse
/** 
 * <p/>
**/
export class DescribeConfigRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRules", elemType: shared.ConfigRule })
  configRules?: ConfigRule[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
