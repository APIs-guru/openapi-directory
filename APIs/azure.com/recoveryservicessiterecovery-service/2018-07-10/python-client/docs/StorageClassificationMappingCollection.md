# StorageClassificationMappingCollection

Collection of storage mapping details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[StorageClassificationMapping]**](StorageClassificationMapping.md) | The storage details. | [optional] 

## Example

```python
from openapi_client.models.storage_classification_mapping_collection import StorageClassificationMappingCollection

# TODO update the JSON string below
json = "{}"
# create an instance of StorageClassificationMappingCollection from a JSON string
storage_classification_mapping_collection_instance = StorageClassificationMappingCollection.from_json(json)
# print the JSON string representation of the object
print(StorageClassificationMappingCollection.to_json())

# convert the object into a dict
storage_classification_mapping_collection_dict = storage_classification_mapping_collection_instance.to_dict()
# create an instance of StorageClassificationMappingCollection from a dict
storage_classification_mapping_collection_from_dict = StorageClassificationMappingCollection.from_dict(storage_classification_mapping_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


