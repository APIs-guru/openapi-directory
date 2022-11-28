import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { User } from "./user";



// GetGroupResponse
/** 
 * Contains the response to a successful <a>GetGroup</a> request. 
**/
export class GetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group: Group;

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: User })
  users: User[];
}
