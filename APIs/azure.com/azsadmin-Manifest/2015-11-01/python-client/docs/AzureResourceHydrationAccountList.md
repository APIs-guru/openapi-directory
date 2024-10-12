# AzureResourceHydrationAccountList

List of the resource hydration accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[AzureResourceHydrationAccount]**](AzureResourceHydrationAccount.md) | List of the resource hydration accounts. | [optional] 

## Example

```python
from openapi_client.models.azure_resource_hydration_account_list import AzureResourceHydrationAccountList

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResourceHydrationAccountList from a JSON string
azure_resource_hydration_account_list_instance = AzureResourceHydrationAccountList.from_json(json)
# print the JSON string representation of the object
print(AzureResourceHydrationAccountList.to_json())

# convert the object into a dict
azure_resource_hydration_account_list_dict = azure_resource_hydration_account_list_instance.to_dict()
# create an instance of AzureResourceHydrationAccountList from a dict
azure_resource_hydration_account_list_from_dict = AzureResourceHydrationAccountList.from_dict(azure_resource_hydration_account_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


