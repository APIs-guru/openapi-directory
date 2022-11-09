import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountTakeoverEventActionTypeEnum } from "./accounttakeovereventactiontypeenum";


// AccountTakeoverActionType
/** 
 * Account takeover action type.
**/
export class AccountTakeoverActionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventAction" })
  eventAction: AccountTakeoverEventActionTypeEnum;

  @Metadata({ data: "json, name=Notify" })
  notify: boolean;
}
