import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminConfirmSignUpRequest
/** 
 * Represents the request to confirm user registration.
**/
export class AdminConfirmSignUpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
