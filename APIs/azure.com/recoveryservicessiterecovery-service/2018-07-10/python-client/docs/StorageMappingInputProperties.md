# StorageMappingInputProperties

Storage mapping input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_storage_classification_id** | **str** | The ID of the storage object. | [optional] 

## Example

```python
from openapi_client.models.storage_mapping_input_properties import StorageMappingInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageMappingInputProperties from a JSON string
storage_mapping_input_properties_instance = StorageMappingInputProperties.from_json(json)
# print the JSON string representation of the object
print(StorageMappingInputProperties.to_json())

# convert the object into a dict
storage_mapping_input_properties_dict = storage_mapping_input_properties_instance.to_dict()
# create an instance of StorageMappingInputProperties from a dict
storage_mapping_input_properties_from_dict = StorageMappingInputProperties.from_dict(storage_mapping_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


