import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminDeleteUserRequest
/** 
 * Represents the request to delete a user as an administrator.
**/
export class AdminDeleteUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
