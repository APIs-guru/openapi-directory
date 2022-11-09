import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminDisableUserRequest
/** 
 * Represents the request to disable the user as an administrator.
**/
export class AdminDisableUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
