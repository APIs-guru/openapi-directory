import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Notification } from "./notification";


// DescribeSubscribersForNotificationRequest
/** 
 *  Request of DescribeSubscribersForNotification 
**/
export class DescribeSubscribersForNotificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Notification" })
  notification: Notification;
}
