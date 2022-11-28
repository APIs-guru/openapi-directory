import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnlinkDeveloperIdentityInput
/** 
 * Input to the <code>UnlinkDeveloperIdentity</code> action.
**/
export class UnlinkDeveloperIdentityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeveloperProviderName" })
  developerProviderName: string;

  @SpeakeasyMetadata({ data: "json, name=DeveloperUserIdentifier" })
  developerUserIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;
}
