# StorageBundle

A Storage account bundle consists of key vault storage account details plus its attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_key_name** | **str** | The current active storage account key name. | [optional] [readonly] 
**attributes** | [**StorageAccountAttributes**](StorageAccountAttributes.md) |  | [optional] 
**auto_regenerate_key** | **bool** | whether keyvault should manage the storage account for the user. | [optional] [readonly] 
**id** | **str** | The storage account id. | [optional] [readonly] 
**regeneration_period** | **str** | The key regeneration time duration specified in ISO-8601 format. | [optional] [readonly] 
**resource_id** | **str** | The storage account resource id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_bundle import StorageBundle

# TODO update the JSON string below
json = "{}"
# create an instance of StorageBundle from a JSON string
storage_bundle_instance = StorageBundle.from_json(json)
# print the JSON string representation of the object
print(StorageBundle.to_json())

# convert the object into a dict
storage_bundle_dict = storage_bundle_instance.to_dict()
# create an instance of StorageBundle from a dict
storage_bundle_from_dict = StorageBundle.from_dict(storage_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


