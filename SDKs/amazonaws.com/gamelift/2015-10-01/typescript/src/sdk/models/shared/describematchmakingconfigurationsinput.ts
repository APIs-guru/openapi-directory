import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeMatchmakingConfigurationsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeMatchmakingConfigurationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleSetName" })
  ruleSetName?: string;
}
