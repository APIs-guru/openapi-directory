# EventsOperationInfo

Operation info for an event result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the operation | [optional] 
**name** | **str** | Name of the operation | [optional] 
**parent_id** | **str** | Parent ID of the operation | [optional] 
**synthetic_source** | **str** | Synthetic source of the operation | [optional] 

## Example

```python
from openapi_client.models.events_operation_info import EventsOperationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsOperationInfo from a JSON string
events_operation_info_instance = EventsOperationInfo.from_json(json)
# print the JSON string representation of the object
print(EventsOperationInfo.to_json())

# convert the object into a dict
events_operation_info_dict = events_operation_info_instance.to_dict()
# create an instance of EventsOperationInfo from a dict
events_operation_info_from_dict = EventsOperationInfo.from_dict(events_operation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


