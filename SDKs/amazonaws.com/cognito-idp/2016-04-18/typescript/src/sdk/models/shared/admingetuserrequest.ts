import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminGetUserRequest
/** 
 * Represents the request to get the specified user as an administrator.
**/
export class AdminGetUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
