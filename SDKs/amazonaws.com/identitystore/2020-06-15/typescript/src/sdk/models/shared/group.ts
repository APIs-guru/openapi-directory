import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Group
/** 
 * A group object, which contains a specified group’s metadata and attributes.
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName: string;

  @Metadata({ data: "json, name=GroupId" })
  groupId: string;
}
