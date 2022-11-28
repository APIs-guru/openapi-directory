import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeNotificationsForBudgetRequest
/** 
 *  Request of DescribeNotificationsForBudget 
**/
export class DescribeNotificationsForBudgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
