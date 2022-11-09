import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnlinkDeveloperIdentityInput
/** 
 * Input to the <code>UnlinkDeveloperIdentity</code> action.
**/
export class UnlinkDeveloperIdentityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeveloperProviderName" })
  developerProviderName: string;

  @Metadata({ data: "json, name=DeveloperUserIdentifier" })
  developerUserIdentifier: string;

  @Metadata({ data: "json, name=IdentityId" })
  identityId: string;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;
}
