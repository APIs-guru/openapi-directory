import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListIdentityPoolsInput
/** 
 * Input to the ListIdentityPools action.
**/
export class ListIdentityPoolsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
