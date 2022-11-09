import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ListEventTypesFilterNameEnum } from "./listeventtypesfilternameenum";
/**
 * Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
**/
export declare class ListEventTypesFilter extends SpeakeasyBase {
    name: ListEventTypesFilterNameEnum;
    value: string;
}
