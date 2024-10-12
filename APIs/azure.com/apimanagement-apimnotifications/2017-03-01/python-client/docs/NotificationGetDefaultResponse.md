# NotificationGetDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[NotificationGetDefaultResponseDetailsInner]**](NotificationGetDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.notification_get_default_response import NotificationGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationGetDefaultResponse from a JSON string
notification_get_default_response_instance = NotificationGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(NotificationGetDefaultResponse.to_json())

# convert the object into a dict
notification_get_default_response_dict = notification_get_default_response_instance.to_dict()
# create an instance of NotificationGetDefaultResponse from a dict
notification_get_default_response_from_dict = NotificationGetDefaultResponse.from_dict(notification_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


