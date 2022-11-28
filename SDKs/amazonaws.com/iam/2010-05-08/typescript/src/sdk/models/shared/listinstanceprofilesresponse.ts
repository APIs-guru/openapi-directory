import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";



// ListInstanceProfilesResponse
/** 
 * Contains the response to a successful <a>ListInstanceProfiles</a> request. 
**/
export class ListInstanceProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceProfile })
  instanceProfiles: InstanceProfile[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
