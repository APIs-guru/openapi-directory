import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminEnableUserRequest
/** 
 * Represents the request that enables the user as an administrator.
**/
export class AdminEnableUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
