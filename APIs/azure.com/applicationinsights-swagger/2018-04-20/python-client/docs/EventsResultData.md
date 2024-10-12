# EventsResultData

Events query result data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai** | [**EventsAiInfo**](EventsAiInfo.md) |  | [optional] 
**application** | [**EventsApplicationInfo**](EventsApplicationInfo.md) |  | [optional] 
**client** | [**EventsClientInfo**](EventsClientInfo.md) |  | [optional] 
**cloud** | [**EventsCloudInfo**](EventsCloudInfo.md) |  | [optional] 
**count** | **int** | Count of the event | [optional] 
**custom_dimensions** | [**EventsResultDataCustomDimensions**](EventsResultDataCustomDimensions.md) |  | [optional] 
**custom_measurements** | [**EventsResultDataCustomMeasurements**](EventsResultDataCustomMeasurements.md) |  | [optional] 
**id** | **str** | The unique ID for this event. | [optional] 
**operation** | [**EventsOperationInfo**](EventsOperationInfo.md) |  | [optional] 
**session** | [**EventsSessionInfo**](EventsSessionInfo.md) |  | [optional] 
**timestamp** | **datetime** | Timestamp of the event | [optional] 
**type** | [**EventType**](EventType.md) |  | [optional] 
**user** | [**EventsUserInfo**](EventsUserInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_result_data import EventsResultData

# TODO update the JSON string below
json = "{}"
# create an instance of EventsResultData from a JSON string
events_result_data_instance = EventsResultData.from_json(json)
# print the JSON string representation of the object
print(EventsResultData.to_json())

# convert the object into a dict
events_result_data_dict = events_result_data_instance.to_dict()
# create an instance of EventsResultData from a dict
events_result_data_from_dict = EventsResultData.from_dict(events_result_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


