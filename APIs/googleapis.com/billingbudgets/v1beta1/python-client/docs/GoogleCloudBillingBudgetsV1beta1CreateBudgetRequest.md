# GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest

Request for CreateBudget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget** | [**GoogleCloudBillingBudgetsV1beta1Budget**](GoogleCloudBillingBudgetsV1beta1Budget.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1beta1_create_budget_request import GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest from a JSON string
google_cloud_billing_budgets_v1beta1_create_budget_request_instance = GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1beta1_create_budget_request_dict = google_cloud_billing_budgets_v1beta1_create_budget_request_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest from a dict
google_cloud_billing_budgets_v1beta1_create_budget_request_from_dict = GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest.from_dict(google_cloud_billing_budgets_v1beta1_create_budget_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


