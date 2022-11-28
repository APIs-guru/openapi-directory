import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminUserGlobalSignOutRequest
/** 
 * The request to sign out of all devices, as an administrator.
**/
export class AdminUserGlobalSignOutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
