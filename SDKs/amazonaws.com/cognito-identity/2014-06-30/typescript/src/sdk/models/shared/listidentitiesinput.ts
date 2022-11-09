import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListIdentitiesInput
/** 
 * Input to the ListIdentities action.
**/
export class ListIdentitiesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=HideDisabled" })
  hideDisabled?: boolean;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
