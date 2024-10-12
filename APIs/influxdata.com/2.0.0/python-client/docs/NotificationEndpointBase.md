# NotificationEndpointBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** | An optional description of the notification endpoint. | [optional] 
**id** | **str** |  | [optional] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**links** | [**NotificationEndpointBaseLinks**](NotificationEndpointBaseLinks.md) |  | [optional] 
**name** | **str** |  | 
**org_id** | **str** |  | [optional] 
**status** | **str** | The status of the endpoint. | [optional] [default to 'active']
**type** | [**NotificationEndpointType**](NotificationEndpointType.md) |  | 
**updated_at** | **datetime** |  | [optional] [readonly] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_endpoint_base import NotificationEndpointBase

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationEndpointBase from a JSON string
notification_endpoint_base_instance = NotificationEndpointBase.from_json(json)
# print the JSON string representation of the object
print(NotificationEndpointBase.to_json())

# convert the object into a dict
notification_endpoint_base_dict = notification_endpoint_base_instance.to_dict()
# create an instance of NotificationEndpointBase from a dict
notification_endpoint_base_from_dict = NotificationEndpointBase.from_dict(notification_endpoint_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


