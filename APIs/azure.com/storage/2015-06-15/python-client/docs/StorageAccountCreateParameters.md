# StorageAccountCreateParameters

The parameters to provide for the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed. | 
**properties** | [**StorageAccountPropertiesCreateParameters**](StorageAccountPropertiesCreateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | A list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. | [optional] 

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


