# AzureSubscriptionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_billable** | **bool** | If the subscription can be used for billing | [optional] 
**is_billing** | **bool** | If the subscription is used for billing | [optional] 
**is_microsoft_internal** | **bool** | If the subscription is internal Microsoft subscription | [optional] 
**subscription_id** | **str** | The azure subscription id | 
**subscription_name** | **str** | The name of the azure subscription | 
**tenant_id** | **str** | The tenant id of the azure subscription belongs to | 

## Example

```python
from openapi_client.models.azure_subscription_response import AzureSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSubscriptionResponse from a JSON string
azure_subscription_response_instance = AzureSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(AzureSubscriptionResponse.to_json())

# convert the object into a dict
azure_subscription_response_dict = azure_subscription_response_instance.to_dict()
# create an instance of AzureSubscriptionResponse from a dict
azure_subscription_response_from_dict = AzureSubscriptionResponse.from_dict(azure_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


