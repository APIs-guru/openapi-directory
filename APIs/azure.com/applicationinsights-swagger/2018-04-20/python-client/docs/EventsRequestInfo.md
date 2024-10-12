# EventsRequestInfo

The request info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **float** | The duration of the request | [optional] 
**id** | **str** | The ID of the request | [optional] 
**name** | **str** | The name of the request | [optional] 
**performance_bucket** | **str** | The performance bucket of the request | [optional] 
**result_code** | **str** | The result code of the request | [optional] 
**source** | **str** | The source of the request | [optional] 
**success** | **str** | Indicates if the request was successful | [optional] 
**url** | **str** | The URL of the request | [optional] 

## Example

```python
from openapi_client.models.events_request_info import EventsRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsRequestInfo from a JSON string
events_request_info_instance = EventsRequestInfo.from_json(json)
# print the JSON string representation of the object
print(EventsRequestInfo.to_json())

# convert the object into a dict
events_request_info_dict = events_request_info_instance.to_dict()
# create an instance of EventsRequestInfo from a dict
events_request_info_from_dict = EventsRequestInfo.from_dict(events_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


