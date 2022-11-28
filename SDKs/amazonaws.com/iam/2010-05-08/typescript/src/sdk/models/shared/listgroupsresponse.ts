import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



// ListGroupsResponse
/** 
 * Contains the response to a successful <a>ListGroups</a> request. 
**/
export class ListGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Group })
  groups: Group[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
