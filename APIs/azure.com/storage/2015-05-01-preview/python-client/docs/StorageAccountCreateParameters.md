# StorageAccountCreateParameters

The parameters to provide for the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageAccountPropertiesCreateParameters**](StorageAccountPropertiesCreateParameters.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_create_parameters import StorageAccountCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountCreateParameters from a JSON string
storage_account_create_parameters_instance = StorageAccountCreateParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountCreateParameters.to_json())

# convert the object into a dict
storage_account_create_parameters_dict = storage_account_create_parameters_instance.to_dict()
# create an instance of StorageAccountCreateParameters from a dict
storage_account_create_parameters_from_dict = StorageAccountCreateParameters.from_dict(storage_account_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


