import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";



// CreateInstanceProfileResponse
/** 
 * Contains the response to a successful <a>CreateInstanceProfile</a> request. 
**/
export class CreateInstanceProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceProfile: InstanceProfile;
}
