import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoginProfile } from "./loginprofile";



// GetLoginProfileResponse
/** 
 * Contains the response to a successful <a>GetLoginProfile</a> request. 
**/
export class GetLoginProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  loginProfile: LoginProfile;
}
