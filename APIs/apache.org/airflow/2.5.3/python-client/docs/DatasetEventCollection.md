# DatasetEventCollection

A collection of dataset events.  *New in version 2.4.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**dataset_events** | [**List[DatasetEvent]**](DatasetEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.dataset_event_collection import DatasetEventCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetEventCollection from a JSON string
dataset_event_collection_instance = DatasetEventCollection.from_json(json)
# print the JSON string representation of the object
print(DatasetEventCollection.to_json())

# convert the object into a dict
dataset_event_collection_dict = dataset_event_collection_instance.to_dict()
# create an instance of DatasetEventCollection from a dict
dataset_event_collection_from_dict = DatasetEventCollection.from_dict(dataset_event_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


