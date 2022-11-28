import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTakeoverEventActionTypeEnum } from "./accounttakeovereventactiontypeenum";
/**
 * Account takeover action type.
**/
export declare class AccountTakeoverActionType extends SpeakeasyBase {
    eventAction: AccountTakeoverEventActionTypeEnum;
    notify: boolean;
}
