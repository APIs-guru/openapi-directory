# DatasetCollection

A collection of datasets.  *New in version 2.4.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**datasets** | [**List[Dataset]**](Dataset.md) |  | [optional] 

## Example

```python
from openapi_client.models.dataset_collection import DatasetCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetCollection from a JSON string
dataset_collection_instance = DatasetCollection.from_json(json)
# print the JSON string representation of the object
print(DatasetCollection.to_json())

# convert the object into a dict
dataset_collection_dict = dataset_collection_instance.to_dict()
# create an instance of DatasetCollection from a dict
dataset_collection_from_dict = DatasetCollection.from_dict(dataset_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


