import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOpenIdTokenInput
/** 
 * Input to the GetOpenIdToken action.
**/
export class GetOpenIdTokenInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId: string;

  @SpeakeasyMetadata({ data: "json, name=Logins" })
  logins?: Map<string, string>;
}
