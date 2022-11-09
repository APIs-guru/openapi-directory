import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Notification } from "./notification";


// DescribeNotificationsForBudgetResponse
/** 
 *  Response of GetNotificationsForBudget 
**/
export class DescribeNotificationsForBudgetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Notifications", elemType: shared.Notification })
  notifications?: Notification[];
}
