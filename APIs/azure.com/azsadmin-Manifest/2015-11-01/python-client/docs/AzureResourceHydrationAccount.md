# AzureResourceHydrationAccount

The API versions supported by the endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The account name. | [optional] 
**encrypted_key** | **str** | The encrypted key. | [optional] 
**max_child_resource_consistency_job_limit** | **int** | The next child resource consistency job limit. | [optional] 
**subscription_id** | **str** | The subscription identifier. | [optional] 

## Example

```python
from openapi_client.models.azure_resource_hydration_account import AzureResourceHydrationAccount

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResourceHydrationAccount from a JSON string
azure_resource_hydration_account_instance = AzureResourceHydrationAccount.from_json(json)
# print the JSON string representation of the object
print(AzureResourceHydrationAccount.to_json())

# convert the object into a dict
azure_resource_hydration_account_dict = azure_resource_hydration_account_instance.to_dict()
# create an instance of AzureResourceHydrationAccount from a dict
azure_resource_hydration_account_from_dict = AzureResourceHydrationAccount.from_dict(azure_resource_hydration_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


