import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListNotificationRulesFilterNameEnum } from "./listnotificationrulesfilternameenum";



// ListNotificationRulesFilter
/** 
 * Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
**/
export class ListNotificationRulesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: ListNotificationRulesFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
