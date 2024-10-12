# AzureStoragePropertyDictionaryResource

AzureStorageInfo dictionary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Dict[str, AzureStorageInfoValue]**](AzureStorageInfoValue.md) | Azure storage accounts. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_storage_property_dictionary_resource import AzureStoragePropertyDictionaryResource

# TODO update the JSON string below
json = "{}"
# create an instance of AzureStoragePropertyDictionaryResource from a JSON string
azure_storage_property_dictionary_resource_instance = AzureStoragePropertyDictionaryResource.from_json(json)
# print the JSON string representation of the object
print(AzureStoragePropertyDictionaryResource.to_json())

# convert the object into a dict
azure_storage_property_dictionary_resource_dict = azure_storage_property_dictionary_resource_instance.to_dict()
# create an instance of AzureStoragePropertyDictionaryResource from a dict
azure_storage_property_dictionary_resource_from_dict = AzureStoragePropertyDictionaryResource.from_dict(azure_storage_property_dictionary_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


