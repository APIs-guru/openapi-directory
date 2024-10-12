# SendEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**EventRequest**](EventRequest.md) |  | 

## Example

```python
from openapi_client.models.send_event_request import SendEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendEventRequest from a JSON string
send_event_request_instance = SendEventRequest.from_json(json)
# print the JSON string representation of the object
print(SendEventRequest.to_json())

# convert the object into a dict
send_event_request_dict = send_event_request_instance.to_dict()
# create an instance of SendEventRequest from a dict
send_event_request_from_dict = SendEventRequest.from_dict(send_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


