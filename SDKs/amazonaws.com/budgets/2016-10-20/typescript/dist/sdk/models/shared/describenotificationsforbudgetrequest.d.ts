import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Request of DescribeNotificationsForBudget
**/
export declare class DescribeNotificationsForBudgetRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    maxResults?: number;
    nextToken?: string;
}
