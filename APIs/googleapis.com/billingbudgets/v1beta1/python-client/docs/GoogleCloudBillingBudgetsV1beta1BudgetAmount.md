# GoogleCloudBillingBudgetsV1beta1BudgetAmount

The budgeted amount for each usage period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_period_amount** | **object** | Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period&#39;s spend; that is, there are no other options yet. Future configuration options will be described here (for example, configuring a percentage of last period&#39;s spend). LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period. | [optional] 
**specified_amount** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1beta1_budget_amount import GoogleCloudBillingBudgetsV1beta1BudgetAmount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1beta1BudgetAmount from a JSON string
google_cloud_billing_budgets_v1beta1_budget_amount_instance = GoogleCloudBillingBudgetsV1beta1BudgetAmount.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1beta1BudgetAmount.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1beta1_budget_amount_dict = google_cloud_billing_budgets_v1beta1_budget_amount_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1beta1BudgetAmount from a dict
google_cloud_billing_budgets_v1beta1_budget_amount_from_dict = GoogleCloudBillingBudgetsV1beta1BudgetAmount.from_dict(google_cloud_billing_budgets_v1beta1_budget_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


