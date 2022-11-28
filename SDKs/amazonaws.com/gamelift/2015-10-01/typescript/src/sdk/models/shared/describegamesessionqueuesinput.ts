import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeGameSessionQueuesInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeGameSessionQueuesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
