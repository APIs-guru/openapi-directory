# AppsList200ResponseInnerAllOfAzureSubscription


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
from openapi_client.models.apps_list200_response_inner_all_of_azure_subscription import AppsList200ResponseInnerAllOfAzureSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of AppsList200ResponseInnerAllOfAzureSubscription from a JSON string
apps_list200_response_inner_all_of_azure_subscription_instance = AppsList200ResponseInnerAllOfAzureSubscription.from_json(json)
# print the JSON string representation of the object
print(AppsList200ResponseInnerAllOfAzureSubscription.to_json())

# convert the object into a dict
apps_list200_response_inner_all_of_azure_subscription_dict = apps_list200_response_inner_all_of_azure_subscription_instance.to_dict()
# create an instance of AppsList200ResponseInnerAllOfAzureSubscription from a dict
apps_list200_response_inner_all_of_azure_subscription_from_dict = AppsList200ResponseInnerAllOfAzureSubscription.from_dict(apps_list200_response_inner_all_of_azure_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


