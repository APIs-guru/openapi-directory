import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";



// GetInstanceProfileResponse
/** 
 * Contains the response to a successful <a>GetInstanceProfile</a> request. 
**/
export class GetInstanceProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceProfile: InstanceProfile;
}
