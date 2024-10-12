# DataPipeEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**annotated** | **bool** |  | [optional] 
**errors** | [**List[PropertyError]**](PropertyError.md) |  | [optional] 
**good** | **bool** |  | [optional] 
**previous_event_action** | **str** |  | [optional] 
**questionable** | **bool** |  | [optional] 
**substituted** | **bool** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**units_abbreviation** | **str** |  | [optional] 
**value** | **object** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_pipe_event import DataPipeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DataPipeEvent from a JSON string
data_pipe_event_instance = DataPipeEvent.from_json(json)
# print the JSON string representation of the object
print(DataPipeEvent.to_json())

# convert the object into a dict
data_pipe_event_dict = data_pipe_event_instance.to_dict()
# create an instance of DataPipeEvent from a dict
data_pipe_event_from_dict = DataPipeEvent.from_dict(data_pipe_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


