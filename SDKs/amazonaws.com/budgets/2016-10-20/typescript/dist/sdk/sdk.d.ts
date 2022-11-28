import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://budgets.amazonaws.com", "http://budgets.{region}.amazonaws.com.cn", "https://budgets.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createBudget - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
    **/
    createBudget(req: operations.CreateBudgetRequest, config?: AxiosRequestConfig): Promise<operations.CreateBudgetResponse>;
    /**
     * createBudgetAction -  Creates a budget action.
    **/
    createBudgetAction(req: operations.CreateBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.CreateBudgetActionResponse>;
    /**
     * createNotification - Creates a notification. You must create the budget before you create the associated notification.
    **/
    createNotification(req: operations.CreateNotificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotificationResponse>;
    /**
     * createSubscriber - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
    **/
    createSubscriber(req: operations.CreateSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriberResponse>;
    /**
     * deleteBudget - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
    **/
    deleteBudget(req: operations.DeleteBudgetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBudgetResponse>;
    /**
     * deleteBudgetAction -  Deletes a budget action.
    **/
    deleteBudgetAction(req: operations.DeleteBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBudgetActionResponse>;
    /**
     * deleteNotification - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
    **/
    deleteNotification(req: operations.DeleteNotificationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationResponse>;
    /**
     * deleteSubscriber - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
    **/
    deleteSubscriber(req: operations.DeleteSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriberResponse>;
    /**
     * describeBudget - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
    **/
    describeBudget(req: operations.DescribeBudgetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetResponse>;
    /**
     * describeBudgetAction -  Describes a budget action detail.
    **/
    describeBudgetAction(req: operations.DescribeBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetActionResponse>;
    /**
     * describeBudgetActionHistories -  Describes a budget action history detail.
    **/
    describeBudgetActionHistories(req: operations.DescribeBudgetActionHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetActionHistoriesResponse>;
    /**
     * describeBudgetActionsForAccount -  Describes all of the budget actions for an account.
    **/
    describeBudgetActionsForAccount(req: operations.DescribeBudgetActionsForAccountRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetActionsForAccountResponse>;
    /**
     * describeBudgetActionsForBudget -  Describes all of the budget actions for a budget.
    **/
    describeBudgetActionsForBudget(req: operations.DescribeBudgetActionsForBudgetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetActionsForBudgetResponse>;
    /**
     * describeBudgetPerformanceHistory - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
    **/
    describeBudgetPerformanceHistory(req: operations.DescribeBudgetPerformanceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetPerformanceHistoryResponse>;
    /**
     * describeBudgets - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
    **/
    describeBudgets(req: operations.DescribeBudgetsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBudgetsResponse>;
    /**
     * describeNotificationsForBudget - Lists the notifications that are associated with a budget.
    **/
    describeNotificationsForBudget(req: operations.DescribeNotificationsForBudgetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeNotificationsForBudgetResponse>;
    /**
     * describeSubscribersForNotification - Lists the subscribers that are associated with a notification.
    **/
    describeSubscribersForNotification(req: operations.DescribeSubscribersForNotificationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSubscribersForNotificationResponse>;
    /**
     * executeBudgetAction -  Executes a budget action.
    **/
    executeBudgetAction(req: operations.ExecuteBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteBudgetActionResponse>;
    /**
     * updateBudget - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
    **/
    updateBudget(req: operations.UpdateBudgetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBudgetResponse>;
    /**
     * updateBudgetAction -  Updates a budget action.
    **/
    updateBudgetAction(req: operations.UpdateBudgetActionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBudgetActionResponse>;
    /**
     * updateNotification - Updates a notification.
    **/
    updateNotification(req: operations.UpdateNotificationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotificationResponse>;
    /**
     * updateSubscriber - Updates a subscriber.
    **/
    updateSubscriber(req: operations.UpdateSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriberResponse>;
}
export {};
