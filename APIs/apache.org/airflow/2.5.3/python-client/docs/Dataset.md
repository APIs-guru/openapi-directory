# Dataset

A dataset item.  *New in version 2.4.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consuming_dags** | [**List[DagScheduleDatasetReference]**](DagScheduleDatasetReference.md) |  | [optional] 
**created_at** | **str** | The dataset creation time | [optional] 
**extra** | **object** | The dataset extra | [optional] 
**id** | **int** | The dataset id | [optional] 
**producing_tasks** | [**List[TaskOutletDatasetReference]**](TaskOutletDatasetReference.md) |  | [optional] 
**updated_at** | **str** | The dataset update time | [optional] 
**uri** | **str** | The dataset uri | [optional] 

## Example

```python
from openapi_client.models.dataset import Dataset

# TODO update the JSON string below
json = "{}"
# create an instance of Dataset from a JSON string
dataset_instance = Dataset.from_json(json)
# print the JSON string representation of the object
print(Dataset.to_json())

# convert the object into a dict
dataset_dict = dataset_instance.to_dict()
# create an instance of Dataset from a dict
dataset_from_dict = Dataset.from_dict(dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


