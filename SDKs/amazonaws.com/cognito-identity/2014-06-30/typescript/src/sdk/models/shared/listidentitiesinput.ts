import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListIdentitiesInput
/** 
 * Input to the ListIdentities action.
**/
export class ListIdentitiesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HideDisabled" })
  hideDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
