import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



// DescribeNotificationsForBudgetResponse
/** 
 *  Response of GetNotificationsForBudget 
**/
export class DescribeNotificationsForBudgetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Notifications", elemType: Notification })
  notifications?: Notification[];
}
