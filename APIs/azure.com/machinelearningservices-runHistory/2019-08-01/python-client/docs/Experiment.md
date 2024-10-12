# Experiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_time** | **datetime** |  | [optional] 
**created_utc** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**experiment_id** | **str** |  | [optional] 
**latest_created_run_created_utc** | **datetime** |  | [optional] 
**latest_created_run_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**tags** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.experiment import Experiment

# TODO update the JSON string below
json = "{}"
# create an instance of Experiment from a JSON string
experiment_instance = Experiment.from_json(json)
# print the JSON string representation of the object
print(Experiment.to_json())

# convert the object into a dict
experiment_dict = experiment_instance.to_dict()
# create an instance of Experiment from a dict
experiment_from_dict = Experiment.from_dict(experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


