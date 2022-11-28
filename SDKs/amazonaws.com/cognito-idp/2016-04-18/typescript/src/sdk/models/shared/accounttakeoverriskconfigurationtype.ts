import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTakeoverActionsType } from "./accounttakeoveractionstype";
import { NotifyConfigurationType } from "./notifyconfigurationtype";



// AccountTakeoverRiskConfigurationType
/** 
 * Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
**/
export class AccountTakeoverRiskConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions" })
  actions: AccountTakeoverActionsType;

  @SpeakeasyMetadata({ data: "json, name=NotifyConfiguration" })
  notifyConfiguration?: NotifyConfigurationType;
}
