import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeMatchmakingConfigurationsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeMatchmakingConfigurationsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RuleSetName" })
  ruleSetName?: string;
}
