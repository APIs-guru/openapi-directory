# GoogleCloudBillingBudgetsV1beta1Budget

A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_updates_rule** | [**GoogleCloudBillingBudgetsV1beta1AllUpdatesRule**](GoogleCloudBillingBudgetsV1beta1AllUpdatesRule.md) |  | [optional] 
**amount** | [**GoogleCloudBillingBudgetsV1beta1BudgetAmount**](GoogleCloudBillingBudgetsV1beta1BudgetAmount.md) |  | [optional] 
**budget_filter** | [**GoogleCloudBillingBudgetsV1beta1Filter**](GoogleCloudBillingBudgetsV1beta1Filter.md) |  | [optional] 
**display_name** | **str** | User data for display name in UI. Validation: &lt;&#x3D; 60 chars. | [optional] 
**etag** | **str** | Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes. | [optional] 
**name** | **str** | Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form &#x60;billingAccounts/{billingAccountId}/budgets/{budgetId}&#x60;. | [optional] [readonly] 
**ownership_scope** | **str** |  | [optional] 
**threshold_rules** | [**List[GoogleCloudBillingBudgetsV1beta1ThresholdRule]**](GoogleCloudBillingBudgetsV1beta1ThresholdRule.md) | Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. Optional for &#x60;pubsubTopic&#x60; notifications. Required if using email notifications. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1beta1_budget import GoogleCloudBillingBudgetsV1beta1Budget

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1beta1Budget from a JSON string
google_cloud_billing_budgets_v1beta1_budget_instance = GoogleCloudBillingBudgetsV1beta1Budget.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1beta1Budget.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1beta1_budget_dict = google_cloud_billing_budgets_v1beta1_budget_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1beta1Budget from a dict
google_cloud_billing_budgets_v1beta1_budget_from_dict = GoogleCloudBillingBudgetsV1beta1Budget.from_dict(google_cloud_billing_budgets_v1beta1_budget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


