# StorageClassification

Storage object definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageClassificationProperties**](StorageClassificationProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_classification import StorageClassification

# TODO update the JSON string below
json = "{}"
# create an instance of StorageClassification from a JSON string
storage_classification_instance = StorageClassification.from_json(json)
# print the JSON string representation of the object
print(StorageClassification.to_json())

# convert the object into a dict
storage_classification_dict = storage_classification_instance.to_dict()
# create an instance of StorageClassification from a dict
storage_classification_from_dict = StorageClassification.from_dict(storage_classification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


