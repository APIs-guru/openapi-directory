import { SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMap } from "./eventcategoriesmap";
/**
 * Represents the output of <a>DescribeEventCategories</a>.
**/
export declare class EventCategoriesMessage extends SpeakeasyBase {
    eventCategoriesMapList?: EventCategoriesMap[];
}
