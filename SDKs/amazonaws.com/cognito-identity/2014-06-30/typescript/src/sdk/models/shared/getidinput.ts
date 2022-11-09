import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetIdInput
/** 
 * Input to the GetId action.
**/
export class GetIdInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @Metadata({ data: "json, name=Logins" })
  logins?: Map<string, string>;
}
