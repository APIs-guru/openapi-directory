import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoginProfile } from "./loginprofile";



// CreateLoginProfileResponse
/** 
 * Contains the response to a successful <a>CreateLoginProfile</a> request. 
**/
export class CreateLoginProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  loginProfile: LoginProfile;
}
