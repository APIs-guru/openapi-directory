import { SpeakeasyBase } from "../../../internal/utils";
import { ListNotificationRulesFilterNameEnum } from "./listnotificationrulesfilternameenum";
/**
 * Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
**/
export declare class ListNotificationRulesFilter extends SpeakeasyBase {
    name: ListNotificationRulesFilterNameEnum;
    value: string;
}
