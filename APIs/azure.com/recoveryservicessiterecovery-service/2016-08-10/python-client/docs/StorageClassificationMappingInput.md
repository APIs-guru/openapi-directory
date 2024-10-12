# StorageClassificationMappingInput

Storage mapping input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageMappingInputProperties**](StorageMappingInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_classification_mapping_input import StorageClassificationMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of StorageClassificationMappingInput from a JSON string
storage_classification_mapping_input_instance = StorageClassificationMappingInput.from_json(json)
# print the JSON string representation of the object
print(StorageClassificationMappingInput.to_json())

# convert the object into a dict
storage_classification_mapping_input_dict = storage_classification_mapping_input_instance.to_dict()
# create an instance of StorageClassificationMappingInput from a dict
storage_classification_mapping_input_from_dict = StorageClassificationMappingInput.from_dict(storage_classification_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


