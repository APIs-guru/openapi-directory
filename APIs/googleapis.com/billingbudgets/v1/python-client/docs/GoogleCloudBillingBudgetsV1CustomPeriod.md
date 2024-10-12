# GoogleCloudBillingBudgetsV1CustomPeriod

All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**start_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1_custom_period import GoogleCloudBillingBudgetsV1CustomPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1CustomPeriod from a JSON string
google_cloud_billing_budgets_v1_custom_period_instance = GoogleCloudBillingBudgetsV1CustomPeriod.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1CustomPeriod.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1_custom_period_dict = google_cloud_billing_budgets_v1_custom_period_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1CustomPeriod from a dict
google_cloud_billing_budgets_v1_custom_period_from_dict = GoogleCloudBillingBudgetsV1CustomPeriod.from_dict(google_cloud_billing_budgets_v1_custom_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


