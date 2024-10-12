# NotificationEndpoints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**notification_endpoints** | [**List[NotificationEndpoint]**](NotificationEndpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_endpoints import NotificationEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationEndpoints from a JSON string
notification_endpoints_instance = NotificationEndpoints.from_json(json)
# print the JSON string representation of the object
print(NotificationEndpoints.to_json())

# convert the object into a dict
notification_endpoints_dict = notification_endpoints_instance.to_dict()
# create an instance of NotificationEndpoints from a dict
notification_endpoints_from_dict = NotificationEndpoints.from_dict(notification_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


