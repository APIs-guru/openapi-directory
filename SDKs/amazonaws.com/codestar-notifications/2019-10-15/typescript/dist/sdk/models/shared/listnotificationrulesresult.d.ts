import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationRuleSummary } from "./notificationrulesummary";
export declare class ListNotificationRulesResult extends SpeakeasyBase {
    nextToken?: string;
    notificationRules?: NotificationRuleSummary[];
}
