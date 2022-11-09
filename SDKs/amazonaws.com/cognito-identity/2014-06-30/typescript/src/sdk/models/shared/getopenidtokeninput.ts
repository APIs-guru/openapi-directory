import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOpenIdTokenInput
/** 
 * Input to the GetOpenIdToken action.
**/
export class GetOpenIdTokenInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId: string;

  @Metadata({ data: "json, name=Logins" })
  logins?: Map<string, string>;
}
