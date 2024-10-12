# ActivityEventsInnerParametersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Boolean value of the parameter. | [optional] 
**int_value** | **str** | Integer value of the parameter. | [optional] 
**message_value** | [**ActivityEventsInnerParametersInnerMessageValue**](ActivityEventsInnerParametersInnerMessageValue.md) |  | [optional] 
**multi_int_value** | **List[str]** | Integer values of the parameter. | [optional] 
**multi_message_value** | [**List[ActivityEventsInnerParametersInnerMultiMessageValueInner]**](ActivityEventsInnerParametersInnerMultiMessageValueInner.md) | List of &#x60;messageValue&#x60; objects. | [optional] 
**multi_value** | **List[str]** | String values of the parameter. | [optional] 
**name** | **str** | The name of the parameter. | [optional] 
**value** | **str** | String value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.activity_events_inner_parameters_inner import ActivityEventsInnerParametersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityEventsInnerParametersInner from a JSON string
activity_events_inner_parameters_inner_instance = ActivityEventsInnerParametersInner.from_json(json)
# print the JSON string representation of the object
print(ActivityEventsInnerParametersInner.to_json())

# convert the object into a dict
activity_events_inner_parameters_inner_dict = activity_events_inner_parameters_inner_instance.to_dict()
# create an instance of ActivityEventsInnerParametersInner from a dict
activity_events_inner_parameters_inner_from_dict = ActivityEventsInnerParametersInner.from_dict(activity_events_inner_parameters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


