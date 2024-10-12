# StorageAccountInformationProperties

The Azure Storage account properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **str** | The optional suffix for the storage account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_information_properties import StorageAccountInformationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountInformationProperties from a JSON string
storage_account_information_properties_instance = StorageAccountInformationProperties.from_json(json)
# print the JSON string representation of the object
print(StorageAccountInformationProperties.to_json())

# convert the object into a dict
storage_account_information_properties_dict = storage_account_information_properties_instance.to_dict()
# create an instance of StorageAccountInformationProperties from a dict
storage_account_information_properties_from_dict = StorageAccountInformationProperties.from_dict(storage_account_information_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


