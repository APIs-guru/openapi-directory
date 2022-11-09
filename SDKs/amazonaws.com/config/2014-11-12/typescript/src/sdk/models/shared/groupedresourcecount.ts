import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupedResourceCount
/** 
 * The count of resources that are grouped by the group name.
**/
export class GroupedResourceCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupName" })
  groupName: string;

  @Metadata({ data: "json, name=ResourceCount" })
  resourceCount: number;
}
