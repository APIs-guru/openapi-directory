import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMap } from "./eventcategoriesmap";



// EventCategoriesMessage
/** 
 * Represents the output of <a>DescribeEventCategories</a>.
**/
export class EventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventCategoriesMap })
  eventCategoriesMapList?: EventCategoriesMap[];
}
