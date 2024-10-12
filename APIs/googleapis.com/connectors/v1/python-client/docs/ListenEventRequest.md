# ListenEventRequest

Expected request for ListenEvent API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **Dict[str, object]** | Optional. Request payload. | [optional] 

## Example

```python
from openapi_client.models.listen_event_request import ListenEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListenEventRequest from a JSON string
listen_event_request_instance = ListenEventRequest.from_json(json)
# print the JSON string representation of the object
print(ListenEventRequest.to_json())

# convert the object into a dict
listen_event_request_dict = listen_event_request_instance.to_dict()
# create an instance of ListenEventRequest from a dict
listen_event_request_from_dict = ListenEventRequest.from_dict(listen_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


