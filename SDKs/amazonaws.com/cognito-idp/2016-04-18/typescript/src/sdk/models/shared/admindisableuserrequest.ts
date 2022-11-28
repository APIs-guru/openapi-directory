import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminDisableUserRequest
/** 
 * Represents the request to disable the user as an administrator.
**/
export class AdminDisableUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
