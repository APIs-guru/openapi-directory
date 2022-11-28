import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookupDeveloperIdentityResponse
/** 
 * Returned in response to a successful <code>LookupDeveloperIdentity</code> action.
**/
export class LookupDeveloperIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeveloperUserIdentifierList" })
  developerUserIdentifierList?: string[];

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
