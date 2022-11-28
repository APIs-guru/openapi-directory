import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTakeoverEventActionTypeEnum } from "./accounttakeovereventactiontypeenum";



// AccountTakeoverActionType
/** 
 * Account takeover action type.
**/
export class AccountTakeoverActionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventAction" })
  eventAction: AccountTakeoverEventActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notify" })
  notify: boolean;
}
