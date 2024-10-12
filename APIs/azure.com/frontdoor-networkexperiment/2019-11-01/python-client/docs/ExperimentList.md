# ExperimentList

Defines a list of Experiments. It contains a list of Experiment objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of Experiment objects if there are any. | [optional] 
**value** | [**List[Experiment]**](Experiment.md) | List of Experiments within a resource group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.experiment_list import ExperimentList

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentList from a JSON string
experiment_list_instance = ExperimentList.from_json(json)
# print the JSON string representation of the object
print(ExperimentList.to_json())

# convert the object into a dict
experiment_list_dict = experiment_list_instance.to_dict()
# create an instance of ExperimentList from a dict
experiment_list_from_dict = ExperimentList.from_dict(experiment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


