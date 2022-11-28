import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminGetUserRequest
/** 
 * Represents the request to get the specified user as an administrator.
**/
export class AdminGetUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
