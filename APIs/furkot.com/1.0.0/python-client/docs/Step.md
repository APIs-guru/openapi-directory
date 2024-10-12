# Step


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | address of the stop | [optional] 
**arrival** | **datetime** | arrival at the stop in its local timezone as YYYY-MM-DDThh:mm | [optional] 
**coordinates** | [**StepCoordinates**](StepCoordinates.md) |  | [optional] 
**departure** | **datetime** | departure from the stop in its local timezone as YYYY-MM-DDThh:mm | [optional] 
**name** | **str** | name of the stop | [optional] 
**nights** | **int** | number of nights | [optional] 
**passthru** | **bool** | true for pass-through points anchoring route | [optional] 
**route** | [**StepRoute**](StepRoute.md) |  | [optional] 
**url** | **str** | url of the page with more information about the stop | [optional] 

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


