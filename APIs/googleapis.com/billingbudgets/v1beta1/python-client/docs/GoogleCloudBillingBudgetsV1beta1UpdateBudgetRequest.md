# GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest

Request for UpdateBudget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget** | [**GoogleCloudBillingBudgetsV1beta1Budget**](GoogleCloudBillingBudgetsV1beta1Budget.md) |  | [optional] 
**update_mask** | **str** | Optional. Indicates which fields in the provided budget to update. Read-only fields (such as &#x60;name&#x60;) cannot be changed. If this is not provided, then only fields with non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1beta1_update_budget_request import GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest from a JSON string
google_cloud_billing_budgets_v1beta1_update_budget_request_instance = GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1beta1_update_budget_request_dict = google_cloud_billing_budgets_v1beta1_update_budget_request_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest from a dict
google_cloud_billing_budgets_v1beta1_update_budget_request_from_dict = GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest.from_dict(google_cloud_billing_budgets_v1beta1_update_budget_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


