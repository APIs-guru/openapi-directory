import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeMatchmakingRuleSetsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeMatchmakingRuleSetsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
