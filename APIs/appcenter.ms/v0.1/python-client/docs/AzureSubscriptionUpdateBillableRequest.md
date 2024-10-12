# AzureSubscriptionUpdateBillableRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_billable** | **bool** | Billable status of the subscription | 

## Example

```python
from openapi_client.models.azure_subscription_update_billable_request import AzureSubscriptionUpdateBillableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSubscriptionUpdateBillableRequest from a JSON string
azure_subscription_update_billable_request_instance = AzureSubscriptionUpdateBillableRequest.from_json(json)
# print the JSON string representation of the object
print(AzureSubscriptionUpdateBillableRequest.to_json())

# convert the object into a dict
azure_subscription_update_billable_request_dict = azure_subscription_update_billable_request_instance.to_dict()
# create an instance of AzureSubscriptionUpdateBillableRequest from a dict
azure_subscription_update_billable_request_from_dict = AzureSubscriptionUpdateBillableRequest.from_dict(azure_subscription_update_billable_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


