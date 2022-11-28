import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListIdentityPoolsInput
/** 
 * Input to the ListIdentityPools action.
**/
export class ListIdentityPoolsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
