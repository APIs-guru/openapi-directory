# ExperimentParentLink

Parent link for an experiment. Points to the view (profile) to which this experiment belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the view (profile) to which this experiment belongs. This field is read-only. | [optional] 
**type** | **str** | Value is \&quot;analytics#profile\&quot;. This field is read-only. | [optional] [default to 'analytics#profile']

## Example

```python
from openapi_client.models.experiment_parent_link import ExperimentParentLink

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentParentLink from a JSON string
experiment_parent_link_instance = ExperimentParentLink.from_json(json)
# print the JSON string representation of the object
print(ExperimentParentLink.to_json())

# convert the object into a dict
experiment_parent_link_dict = experiment_parent_link_instance.to_dict()
# create an instance of ExperimentParentLink from a dict
experiment_parent_link_from_dict = ExperimentParentLink.from_dict(experiment_parent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


