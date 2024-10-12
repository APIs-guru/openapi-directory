# StorageAccountPropertiesUpdateParameters

The parameters used when updating a storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tier** | **str** | Required for storage accounts where kind &#x3D; BlobStorage. The access tier used for billing. | [optional] 
**custom_domain** | [**CustomDomain**](CustomDomain.md) |  | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**supports_https_traffic_only** | **bool** | Allows https traffic only to storage service if sets to true. | [optional] [default to False]

## Example

```python
from openapi_client.models.storage_account_properties_update_parameters import StorageAccountPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountPropertiesUpdateParameters from a JSON string
storage_account_properties_update_parameters_instance = StorageAccountPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountPropertiesUpdateParameters.to_json())

# convert the object into a dict
storage_account_properties_update_parameters_dict = storage_account_properties_update_parameters_instance.to_dict()
# create an instance of StorageAccountPropertiesUpdateParameters from a dict
storage_account_properties_update_parameters_from_dict = StorageAccountPropertiesUpdateParameters.from_dict(storage_account_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


