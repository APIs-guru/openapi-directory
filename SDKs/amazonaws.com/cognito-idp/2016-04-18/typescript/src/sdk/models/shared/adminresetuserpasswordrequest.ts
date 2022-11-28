import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminResetUserPasswordRequest
/** 
 * Represents the request to reset a user's password as an administrator.
**/
export class AdminResetUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
