# StorageClassificationMapping

Storage mapping object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageClassificationMappingProperties**](StorageClassificationMappingProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_classification_mapping import StorageClassificationMapping

# TODO update the JSON string below
json = "{}"
# create an instance of StorageClassificationMapping from a JSON string
storage_classification_mapping_instance = StorageClassificationMapping.from_json(json)
# print the JSON string representation of the object
print(StorageClassificationMapping.to_json())

# convert the object into a dict
storage_classification_mapping_dict = storage_classification_mapping_instance.to_dict()
# create an instance of StorageClassificationMapping from a dict
storage_classification_mapping_from_dict = StorageClassificationMapping.from_dict(storage_classification_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


