# ExperimentVariationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED. | [optional] 
**status** | **str** | Status of the variation. Possible values: \&quot;ACTIVE\&quot;, \&quot;INACTIVE\&quot;. INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED. | [optional] 
**url** | **str** | The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED. | [optional] 
**weight** | **float** | Weight that this variation should receive. Only present if the experiment is running. This field is read-only. | [optional] 
**won** | **bool** | True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only. | [optional] 

## Example

```python
from openapi_client.models.experiment_variations_inner import ExperimentVariationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentVariationsInner from a JSON string
experiment_variations_inner_instance = ExperimentVariationsInner.from_json(json)
# print the JSON string representation of the object
print(ExperimentVariationsInner.to_json())

# convert the object into a dict
experiment_variations_inner_dict = experiment_variations_inner_instance.to_dict()
# create an instance of ExperimentVariationsInner from a dict
experiment_variations_inner_from_dict = ExperimentVariationsInner.from_dict(experiment_variations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


