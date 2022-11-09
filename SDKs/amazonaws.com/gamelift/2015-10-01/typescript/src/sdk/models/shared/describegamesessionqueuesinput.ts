import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeGameSessionQueuesInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeGameSessionQueuesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
