# Step

Information about each step of the update process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the step. | [optional] 
**end_time_utc** | **datetime** | Time at which this step stopped executing | [optional] 
**error_message** | **str** | Error message, if any. | [optional] 
**name** | **str** | Name of the step. | [optional] 
**start_time_utc** | **datetime** | Time at which this step started executing | [optional] 
**status** | **str** | State of the step. | [optional] 
**steps** | [**List[Step]**](Step.md) | Inner steps | [optional] 

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


