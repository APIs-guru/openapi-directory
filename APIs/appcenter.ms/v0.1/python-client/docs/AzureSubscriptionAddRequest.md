# AzureSubscriptionAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_billing** | **bool** | If the subscription is used for billing | [optional] 
**subscription_id** | **str** | The azure subscription id | 
**subscription_name** | **str** | The name of the azure subscription | 
**tenant_id** | **str** | The tenant id of the azure subscription belongs to | 

## Example

```python
from openapi_client.models.azure_subscription_add_request import AzureSubscriptionAddRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSubscriptionAddRequest from a JSON string
azure_subscription_add_request_instance = AzureSubscriptionAddRequest.from_json(json)
# print the JSON string representation of the object
print(AzureSubscriptionAddRequest.to_json())

# convert the object into a dict
azure_subscription_add_request_dict = azure_subscription_add_request_instance.to_dict()
# create an instance of AzureSubscriptionAddRequest from a dict
azure_subscription_add_request_from_dict = AzureSubscriptionAddRequest.from_dict(azure_subscription_add_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


