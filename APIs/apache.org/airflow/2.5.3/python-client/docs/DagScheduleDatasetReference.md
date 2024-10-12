# DagScheduleDatasetReference

A datasets reference to a downstream DAG.  *New in version 2.4.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | The dataset reference creation time | [optional] 
**dag_id** | **str** | The DAG ID that depends on the dataset. | [optional] 
**updated_at** | **str** | The dataset reference update time | [optional] 

## Example

```python
from openapi_client.models.dag_schedule_dataset_reference import DagScheduleDatasetReference

# TODO update the JSON string below
json = "{}"
# create an instance of DagScheduleDatasetReference from a JSON string
dag_schedule_dataset_reference_instance = DagScheduleDatasetReference.from_json(json)
# print the JSON string representation of the object
print(DagScheduleDatasetReference.to_json())

# convert the object into a dict
dag_schedule_dataset_reference_dict = dag_schedule_dataset_reference_instance.to_dict()
# create an instance of DagScheduleDatasetReference from a dict
dag_schedule_dataset_reference_from_dict = DagScheduleDatasetReference.from_dict(dag_schedule_dataset_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


