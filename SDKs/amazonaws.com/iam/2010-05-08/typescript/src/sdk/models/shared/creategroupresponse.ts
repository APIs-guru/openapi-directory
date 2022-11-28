import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



// CreateGroupResponse
/** 
 * Contains the response to a successful <a>CreateGroup</a> request. 
**/
export class CreateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group: Group;
}
