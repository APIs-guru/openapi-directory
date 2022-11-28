import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminDeleteUserRequest
/** 
 * Represents the request to delete a user as an administrator.
**/
export class AdminDeleteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
