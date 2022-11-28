import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoryGroup } from "./eventcategorygroup";



// DescribeEventCategoriesResponse
/** 
 * <p/>
**/
export class DescribeEventCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventCategoryGroupList", elemType: EventCategoryGroup })
  eventCategoryGroupList?: EventCategoryGroup[];
}
