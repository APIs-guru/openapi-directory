# EventParameterInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**type** | [**EventParameterTypes**](EventParameterTypes.md) |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.event_parameter_info import EventParameterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventParameterInfo from a JSON string
event_parameter_info_instance = EventParameterInfo.from_json(json)
# print the JSON string representation of the object
print(EventParameterInfo.to_json())

# convert the object into a dict
event_parameter_info_dict = event_parameter_info_instance.to_dict()
# create an instance of EventParameterInfo from a dict
event_parameter_info_from_dict = EventParameterInfo.from_dict(event_parameter_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


