import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";



// ListInstanceProfilesForRoleResponse
/** 
 * Contains the response to a successful <a>ListInstanceProfilesForRole</a> request. 
**/
export class ListInstanceProfilesForRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceProfile })
  instanceProfiles: InstanceProfile[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
