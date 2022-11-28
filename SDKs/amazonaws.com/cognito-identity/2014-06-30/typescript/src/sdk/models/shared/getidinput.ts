import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetIdInput
/** 
 * Input to the GetId action.
**/
export class GetIdInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Logins" })
  logins?: Map<string, string>;
}
