import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCredentialsForIdentityInput
/** 
 * Input to the <code>GetCredentialsForIdentity</code> action.
**/
export class GetCredentialsForIdentityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomRoleArn" })
  customRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId: string;

  @SpeakeasyMetadata({ data: "json, name=Logins" })
  logins?: Map<string, string>;
}
