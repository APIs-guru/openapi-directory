# DatasetEvent

A dataset event.  *New in version 2.4.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_dagruns** | [**List[BasicDAGRun]**](BasicDAGRun.md) |  | [optional] 
**dataset_id** | **int** | The dataset id | [optional] 
**dataset_uri** | **str** | The URI of the dataset | [optional] 
**extra** | **object** | The dataset event extra | [optional] 
**source_dag_id** | **str** | The DAG ID that updated the dataset. | [optional] 
**source_map_index** | **int** | The task map index that updated the dataset. | [optional] 
**source_run_id** | **str** | The DAG run ID that updated the dataset. | [optional] 
**source_task_id** | **str** | The task ID that updated the dataset. | [optional] 
**timestamp** | **str** | The dataset event creation time | [optional] 

## Example

```python
from openapi_client.models.dataset_event import DatasetEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetEvent from a JSON string
dataset_event_instance = DatasetEvent.from_json(json)
# print the JSON string representation of the object
print(DatasetEvent.to_json())

# convert the object into a dict
dataset_event_dict = dataset_event_instance.to_dict()
# create an instance of DatasetEvent from a dict
dataset_event_from_dict = DatasetEvent.from_dict(dataset_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


