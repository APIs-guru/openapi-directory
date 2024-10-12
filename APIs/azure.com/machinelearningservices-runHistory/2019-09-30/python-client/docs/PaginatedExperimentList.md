# PaginatedExperimentList

A paginated list of Experiments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The token used in retrieving the next page.  If null, there are no additional pages. | [optional] 
**next_link** | **str** | The link to the next page constructed using the continuationToken.  If null, there are no additional pages. | [optional] 
**value** | [**List[Experiment]**](Experiment.md) | An array of objects of type Experiment. | [optional] 

## Example

```python
from openapi_client.models.paginated_experiment_list import PaginatedExperimentList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedExperimentList from a JSON string
paginated_experiment_list_instance = PaginatedExperimentList.from_json(json)
# print the JSON string representation of the object
print(PaginatedExperimentList.to_json())

# convert the object into a dict
paginated_experiment_list_dict = paginated_experiment_list_instance.to_dict()
# create an instance of PaginatedExperimentList from a dict
paginated_experiment_list_from_dict = PaginatedExperimentList.from_dict(paginated_experiment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


