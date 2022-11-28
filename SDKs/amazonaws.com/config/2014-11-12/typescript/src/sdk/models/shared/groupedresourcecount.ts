import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupedResourceCount
/** 
 * The count of resources that are grouped by the group name.
**/
export class GroupedResourceCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCount" })
  resourceCount: number;
}
