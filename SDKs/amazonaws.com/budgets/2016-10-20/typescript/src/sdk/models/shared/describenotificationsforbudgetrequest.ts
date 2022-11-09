import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeNotificationsForBudgetRequest
/** 
 *  Request of DescribeNotificationsForBudget 
**/
export class DescribeNotificationsForBudgetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
