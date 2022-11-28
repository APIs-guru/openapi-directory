import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



// ListGroupsForUserResponse
/** 
 * Contains the response to a successful <a>ListGroupsForUser</a> request. 
**/
export class ListGroupsForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Group })
  groups: Group[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
