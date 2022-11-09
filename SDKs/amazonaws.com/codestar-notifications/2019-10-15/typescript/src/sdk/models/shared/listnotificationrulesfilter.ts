import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListNotificationRulesFilterNameEnum } from "./listnotificationrulesfilternameenum";


// ListNotificationRulesFilter
/** 
 * Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
**/
export class ListNotificationRulesFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: ListNotificationRulesFilterNameEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
