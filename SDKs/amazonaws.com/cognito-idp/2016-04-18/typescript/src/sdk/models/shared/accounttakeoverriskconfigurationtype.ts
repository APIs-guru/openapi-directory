import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountTakeoverActionsType } from "./accounttakeoveractionstype";
import { NotifyConfigurationType } from "./notifyconfigurationtype";


// AccountTakeoverRiskConfigurationType
/** 
 * Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
**/
export class AccountTakeoverRiskConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions" })
  actions: AccountTakeoverActionsType;

  @Metadata({ data: "json, name=NotifyConfiguration" })
  notifyConfiguration?: NotifyConfigurationType;
}
