import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListEventTypesFilterNameEnum } from "./listeventtypesfilternameenum";


// ListEventTypesFilter
/** 
 * Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
**/
export class ListEventTypesFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: ListEventTypesFilterNameEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
