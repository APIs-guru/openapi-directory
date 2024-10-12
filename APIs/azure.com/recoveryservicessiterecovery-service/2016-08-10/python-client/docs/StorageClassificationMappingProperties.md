# StorageClassificationMappingProperties

Storage mapping properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_storage_classification_id** | **str** | Target storage object Id. | [optional] 

## Example

```python
from openapi_client.models.storage_classification_mapping_properties import StorageClassificationMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageClassificationMappingProperties from a JSON string
storage_classification_mapping_properties_instance = StorageClassificationMappingProperties.from_json(json)
# print the JSON string representation of the object
print(StorageClassificationMappingProperties.to_json())

# convert the object into a dict
storage_classification_mapping_properties_dict = storage_classification_mapping_properties_instance.to_dict()
# create an instance of StorageClassificationMappingProperties from a dict
storage_classification_mapping_properties_from_dict = StorageClassificationMappingProperties.from_dict(storage_classification_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


