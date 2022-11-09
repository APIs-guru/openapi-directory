import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookupDeveloperIdentityInput
/** 
 * Input to the <code>LookupDeveloperIdentityInput</code> action.
**/
export class LookupDeveloperIdentityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeveloperUserIdentifier" })
  developerUserIdentifier?: string;

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
