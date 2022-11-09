import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminUserGlobalSignOutRequest
/** 
 * The request to sign out of all devices, as an administrator.
**/
export class AdminUserGlobalSignOutRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
