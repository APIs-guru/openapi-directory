# ApplicationNotificationEndpoint

Managed application notification endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | The managed application notification endpoint uri. | 

## Example

```python
from openapi_client.models.application_notification_endpoint import ApplicationNotificationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationNotificationEndpoint from a JSON string
application_notification_endpoint_instance = ApplicationNotificationEndpoint.from_json(json)
# print the JSON string representation of the object
print(ApplicationNotificationEndpoint.to_json())

# convert the object into a dict
application_notification_endpoint_dict = application_notification_endpoint_instance.to_dict()
# create an instance of ApplicationNotificationEndpoint from a dict
application_notification_endpoint_from_dict = ApplicationNotificationEndpoint.from_dict(application_notification_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


