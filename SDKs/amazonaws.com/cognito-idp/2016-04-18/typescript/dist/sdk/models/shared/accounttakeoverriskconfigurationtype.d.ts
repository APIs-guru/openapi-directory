import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTakeoverActionsType } from "./accounttakeoveractionstype";
import { NotifyConfigurationType } from "./notifyconfigurationtype";
/**
 * Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
**/
export declare class AccountTakeoverRiskConfigurationType extends SpeakeasyBase {
    actions: AccountTakeoverActionsType;
    notifyConfiguration?: NotifyConfigurationType;
}
