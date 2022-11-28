# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateBudgetRequest(
    headers=operations.CreateBudgetHeaders(
        x_amz_algorithm="aut",
        x_amz_content_sha256="quia",
        x_amz_credential="debitis",
        x_amz_date="harum",
        x_amz_security_token="vel",
        x_amz_signature="quo",
        x_amz_signed_headers="non",
        x_amz_target="AWSBudgetServiceGateway.CreateBudget",
    ),
    request=shared.CreateBudgetRequest(
        account_id="mollitia",
        budget=shared.Budget(
            budget_limit=shared.Spend(
                amount="dolorum",
                unit="at",
            ),
            budget_name="sunt",
            budget_type="USAGE",
            calculated_spend=shared.CalculatedSpend(
                actual_spend=shared.Spend(
                    amount="voluptate",
                    unit="excepturi",
                ),
                forecasted_spend=shared.Spend(
                    amount="illum",
                    unit="labore",
                ),
            ),
            cost_filters={
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
            cost_types=shared.CostTypes(
                include_credit=False,
                include_discount=False,
                include_other_subscription=False,
                include_recurring=False,
                include_refund=False,
                include_subscription=True,
                include_support=False,
                include_tax=True,
                include_upfront=True,
                use_amortized=True,
                use_blended=False,
            ),
            last_updated_time="2022-04-10T14:52:19Z",
            planned_budget_limits={
                "doloremque": shared.Spend(
                    amount="minus",
                    unit="ex",
                ),
                "dolores": shared.Spend(
                    amount="quaerat",
                    unit="iste",
                ),
            },
            time_period=shared.TimePeriod(
                end="1976-06-20T13:22:12Z",
                start="1997-07-28T05:01:15Z",
            ),
            time_unit="QUARTERLY",
        ),
        notifications_with_subscribers=[
            shared.NotificationWithSubscribers(
                notification=shared.Notification(
                    comparison_operator="EQUAL_TO",
                    notification_state="ALARM",
                    notification_type="ACTUAL",
                    threshold=58.200001,
                    threshold_type="ABSOLUTE_VALUE",
                ),
                subscribers=[
                    shared.Subscriber(
                        address="dolore",
                        subscription_type="EMAIL",
                    ),
                ],
            ),
            shared.NotificationWithSubscribers(
                notification=shared.Notification(
                    comparison_operator="EQUAL_TO",
                    notification_state="OK",
                    notification_type="FORECASTED",
                    threshold=81.199997,
                    threshold_type="ABSOLUTE_VALUE",
                ),
                subscribers=[
                    shared.Subscriber(
                        address="tenetur",
                        subscription_type="SNS",
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.sdk.create_budget(req)

if res.create_budget_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_budget` - <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
* `create_budget_action` -  Creates a budget action. 
* `create_notification` - Creates a notification. You must create the budget before you create the associated notification.
* `create_subscriber` - Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
* `delete_budget` - <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
* `delete_budget_action` -  Deletes a budget action. 
* `delete_notification` - <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
* `delete_subscriber` - <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
* `describe_budget` - <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
* `describe_budget_action` -  Describes a budget action detail. 
* `describe_budget_action_histories` -  Describes a budget action history detail. 
* `describe_budget_actions_for_account` -  Describes all of the budget actions for an account. 
* `describe_budget_actions_for_budget` -  Describes all of the budget actions for a budget. 
* `describe_budget_performance_history` - Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
* `describe_budgets` - <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
* `describe_notifications_for_budget` - Lists the notifications that are associated with a budget.
* `describe_subscribers_for_notification` - Lists the subscribers that are associated with a notification.
* `execute_budget_action` -  Executes a budget action. 
* `update_budget` - <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
* `update_budget_action` -  Updates a budget action. 
* `update_notification` - Updates a notification.
* `update_subscriber` - Updates a subscriber.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
