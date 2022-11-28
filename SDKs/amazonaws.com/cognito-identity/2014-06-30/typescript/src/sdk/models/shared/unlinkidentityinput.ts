import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnlinkIdentityInput
/** 
 * Input to the UnlinkIdentity action.
**/
export class UnlinkIdentityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId: string;

  @SpeakeasyMetadata({ data: "json, name=Logins" })
  logins: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=LoginsToRemove" })
  loginsToRemove: string[];
}
