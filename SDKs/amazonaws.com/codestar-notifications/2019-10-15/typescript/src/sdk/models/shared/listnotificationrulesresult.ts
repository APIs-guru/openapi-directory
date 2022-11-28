import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationRuleSummary } from "./notificationrulesummary";



export class ListNotificationRulesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationRules", elemType: NotificationRuleSummary })
  notificationRules?: NotificationRuleSummary[];
}
