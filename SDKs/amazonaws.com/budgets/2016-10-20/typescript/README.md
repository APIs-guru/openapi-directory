# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CreateBudgetRequest, CreateBudgetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateBudgetRequest = {
  headers: {
    xAmzAlgorithm: "aut",
    xAmzContentSha256: "quia",
    xAmzCredential: "debitis",
    xAmzDate: "harum",
    xAmzSecurityToken: "vel",
    xAmzSignature: "quo",
    xAmzSignedHeaders: "non",
    xAmzTarget: "AWSBudgetServiceGateway.CreateBudget",
  },
  request: {
    accountId: "mollitia",
    budget: {
      budgetLimit: {
        amount: "dolorum",
        unit: "at",
      },
      budgetName: "sunt",
      budgetType: "USAGE",
      calculatedSpend: {
        actualSpend: {
          amount: "voluptate",
          unit: "excepturi",
        },
        forecastedSpend: {
          amount: "illum",
          unit: "labore",
        },
      },
      costFilters: {
        "officia": [
          "asperiores",
          "maxime",
          "ratione",
        ],
        "voluptatem": [
          "eum",
          "sed",
        ],
      },
      costTypes: {
        includeCredit: false,
        includeDiscount: false,
        includeOtherSubscription: false,
        includeRecurring: false,
        includeRefund: false,
        includeSubscription: true,
        includeSupport: false,
        includeTax: true,
        includeUpfront: true,
        useAmortized: true,
        useBlended: false,
      },
      lastUpdatedTime: "2022-04-10T15:14:06Z",
      plannedBudgetLimits: {
        "doloremque": {
          amount: "minus",
          unit: "ex",
        },
        "dolores": {
          amount: "quaerat",
          unit: "iste",
        },
      },
      timePeriod: {
        end: "1976-06-20T13:43:59Z",
        start: "1997-07-28T05:23:02Z",
      },
      timeUnit: "QUARTERLY",
    },
    notificationsWithSubscribers: [
      {
        notification: {
          comparisonOperator: "EQUAL_TO",
          notificationState: "ALARM",
          notificationType: "ACTUAL",
          threshold: 58.200001,
          thresholdType: "ABSOLUTE_VALUE",
        },
        subscribers: [
          {
            address: "dolore",
            subscriptionType: "EMAIL",
          },
        ],
      },
      {
        notification: {
          comparisonOperator: "EQUAL_TO",
          notificationState: "OK",
          notificationType: "FORECASTED",
          threshold: 81.199997,
          thresholdType: "ABSOLUTE_VALUE",
        },
        subscribers: [
          {
            address: "tenetur",
            subscriptionType: "SNS",
          },
        ],
      },
    ],
  },
};

sdk.sdk.createBudget(req).then((res: CreateBudgetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createBudget` - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* `createBudgetAction` -  Creates a budget action. 
* `createNotification` - Creates a notification. You must create the budget before you create the associated notification.
* `createSubscriber` - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* `deleteBudget` - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* `deleteBudgetAction` -  Deletes a budget action. 
* `deleteNotification` - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* `deleteSubscriber` - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* `describeBudget` - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* `describeBudgetAction` -  Describes a budget action detail. 
* `describeBudgetActionHistories` -  Describes a budget action history detail. 
* `describeBudgetActionsForAccount` -  Describes all of the budget actions for an account. 
* `describeBudgetActionsForBudget` -  Describes all of the budget actions for a budget. 
* `describeBudgetPerformanceHistory` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `describeBudgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `describeNotificationsForBudget` - Lists the notifications that are associated with a budget.
* `describeSubscribersForNotification` - Lists the subscribers that are associated with a notification.
* `executeBudgetAction` -  Executes a budget action. 
* `updateBudget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `updateBudgetAction` -  Updates a budget action. 
* `updateNotification` - Updates a notification.
* `updateSubscriber` - Updates a subscriber.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
