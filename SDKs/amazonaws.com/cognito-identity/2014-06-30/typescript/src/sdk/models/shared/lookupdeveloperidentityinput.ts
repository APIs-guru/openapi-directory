import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookupDeveloperIdentityInput
/** 
 * Input to the <code>LookupDeveloperIdentityInput</code> action.
**/
export class LookupDeveloperIdentityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeveloperUserIdentifier" })
  developerUserIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
