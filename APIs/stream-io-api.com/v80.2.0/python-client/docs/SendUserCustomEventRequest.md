# SendUserCustomEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**UserCustomEventRequest**](UserCustomEventRequest.md) |  | 

## Example

```python
from openapi_client.models.send_user_custom_event_request import SendUserCustomEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendUserCustomEventRequest from a JSON string
send_user_custom_event_request_instance = SendUserCustomEventRequest.from_json(json)
# print the JSON string representation of the object
print(SendUserCustomEventRequest.to_json())

# convert the object into a dict
send_user_custom_event_request_dict = send_user_custom_event_request_instance.to_dict()
# create an instance of SendUserCustomEventRequest from a dict
send_user_custom_event_request_from_dict = SendUserCustomEventRequest.from_dict(send_user_custom_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


