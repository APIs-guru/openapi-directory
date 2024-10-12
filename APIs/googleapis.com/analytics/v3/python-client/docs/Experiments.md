# Experiments

An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Experiment]**](Experiment.md) | A list of experiments. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#experiments']
**next_link** | **str** | Link to next page for this experiment collection. | [optional] 
**previous_link** | **str** | Link to previous page for this experiment collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of resources in the result. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.experiments import Experiments

# TODO update the JSON string below
json = "{}"
# create an instance of Experiments from a JSON string
experiments_instance = Experiments.from_json(json)
# print the JSON string representation of the object
print(Experiments.to_json())

# convert the object into a dict
experiments_dict = experiments_instance.to_dict()
# create an instance of Experiments from a dict
experiments_from_dict = Experiments.from_dict(experiments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


