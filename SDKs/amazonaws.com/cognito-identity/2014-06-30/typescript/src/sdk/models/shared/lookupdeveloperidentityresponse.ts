import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookupDeveloperIdentityResponse
/** 
 * Returned in response to a successful <code>LookupDeveloperIdentity</code> action.
**/
export class LookupDeveloperIdentityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeveloperUserIdentifierList" })
  developerUserIdentifierList?: string[];

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
