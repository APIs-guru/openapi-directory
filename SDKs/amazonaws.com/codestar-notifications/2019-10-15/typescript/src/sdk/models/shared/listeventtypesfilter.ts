import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListEventTypesFilterNameEnum } from "./listeventtypesfilternameenum";



// ListEventTypesFilter
/** 
 * Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
**/
export class ListEventTypesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: ListEventTypesFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
