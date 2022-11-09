import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnlinkIdentityInput
/** 
 * Input to the UnlinkIdentity action.
**/
export class UnlinkIdentityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId: string;

  @Metadata({ data: "json, name=Logins" })
  logins: Map<string, string>;

  @Metadata({ data: "json, name=LoginsToRemove" })
  loginsToRemove: string[];
}
