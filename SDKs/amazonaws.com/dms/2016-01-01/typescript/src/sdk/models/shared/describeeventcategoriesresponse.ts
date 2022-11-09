import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventCategoryGroup } from "./eventcategorygroup";


// DescribeEventCategoriesResponse
/** 
 * <p/>
**/
export class DescribeEventCategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventCategoryGroupList", elemType: shared.EventCategoryGroup })
  eventCategoryGroupList?: EventCategoryGroup[];
}
