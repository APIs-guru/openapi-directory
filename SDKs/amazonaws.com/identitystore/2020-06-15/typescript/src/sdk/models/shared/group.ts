import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Group
/** 
 * A group object, which contains a specified group’s metadata and attributes.
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId: string;
}
