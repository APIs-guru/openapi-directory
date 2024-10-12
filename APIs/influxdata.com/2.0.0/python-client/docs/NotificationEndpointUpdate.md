# NotificationEndpointUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_endpoint_update import NotificationEndpointUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationEndpointUpdate from a JSON string
notification_endpoint_update_instance = NotificationEndpointUpdate.from_json(json)
# print the JSON string representation of the object
print(NotificationEndpointUpdate.to_json())

# convert the object into a dict
notification_endpoint_update_dict = notification_endpoint_update_instance.to_dict()
# create an instance of NotificationEndpointUpdate from a dict
notification_endpoint_update_from_dict = NotificationEndpointUpdate.from_dict(notification_endpoint_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


