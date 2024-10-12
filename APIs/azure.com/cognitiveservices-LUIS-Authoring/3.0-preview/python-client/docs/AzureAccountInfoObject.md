# AzureAccountInfoObject

Defines the Azure account information object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The Azure account name. | 
**azure_subscription_id** | **str** | The id for the Azure subscription. | 
**resource_group** | **str** | The Azure resource group name. | 

## Example

```python
from openapi_client.models.azure_account_info_object import AzureAccountInfoObject

# TODO update the JSON string below
json = "{}"
# create an instance of AzureAccountInfoObject from a JSON string
azure_account_info_object_instance = AzureAccountInfoObject.from_json(json)
# print the JSON string representation of the object
print(AzureAccountInfoObject.to_json())

# convert the object into a dict
azure_account_info_object_dict = azure_account_info_object_instance.to_dict()
# create an instance of AzureAccountInfoObject from a dict
azure_account_info_object_from_dict = AzureAccountInfoObject.from_dict(azure_account_info_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


