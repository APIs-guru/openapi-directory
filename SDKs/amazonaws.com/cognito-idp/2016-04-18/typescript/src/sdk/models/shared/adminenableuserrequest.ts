import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminEnableUserRequest
/** 
 * Represents the request that enables the user as an administrator.
**/
export class AdminEnableUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
