# StorageClassificationCollection

Collection of storage details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[StorageClassification]**](StorageClassification.md) | The storage details. | [optional] 

## Example

```python
from openapi_client.models.storage_classification_collection import StorageClassificationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of StorageClassificationCollection from a JSON string
storage_classification_collection_instance = StorageClassificationCollection.from_json(json)
# print the JSON string representation of the object
print(StorageClassificationCollection.to_json())

# convert the object into a dict
storage_classification_collection_dict = storage_classification_collection_instance.to_dict()
# create an instance of StorageClassificationCollection from a dict
storage_classification_collection_from_dict = StorageClassificationCollection.from_dict(storage_classification_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


