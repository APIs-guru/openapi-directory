# Step

Represents the status of one operation step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The short description of the step. | [optional] 
**status** | **str** | The status code. | [optional] 

## Example

```python
from openapi_client.models.step import Step

# TODO update the JSON string below
json = "{}"
# create an instance of Step from a JSON string
step_instance = Step.from_json(json)
# print the JSON string representation of the object
print(Step.to_json())

# convert the object into a dict
step_dict = step_instance.to_dict()
# create an instance of Step from a dict
step_from_dict = Step.from_dict(step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


