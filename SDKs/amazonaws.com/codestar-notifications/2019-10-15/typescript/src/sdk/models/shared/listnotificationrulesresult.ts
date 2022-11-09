import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationRuleSummary } from "./notificationrulesummary";


export class ListNotificationRulesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NotificationRules", elemType: shared.NotificationRuleSummary })
  notificationRules?: NotificationRuleSummary[];
}
