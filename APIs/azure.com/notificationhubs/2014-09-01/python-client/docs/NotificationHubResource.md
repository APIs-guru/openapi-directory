# NotificationHubResource

Description of a NotificationHub Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the id of the created NotificationHub. | [optional] 
**location** | **str** | Gets or sets datacenter location of the NotificationHub. | [optional] 
**name** | **str** | Gets or sets name of the NotificationHub. | [optional] 
**properties** | [**NotificationHubProperties**](NotificationHubProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets tags of the NotificationHub. | [optional] 
**type** | **str** | Gets or sets resource type of the NotificationHub. | [optional] 

## Example

```python
from openapi_client.models.notification_hub_resource import NotificationHubResource

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationHubResource from a JSON string
notification_hub_resource_instance = NotificationHubResource.from_json(json)
# print the JSON string representation of the object
print(NotificationHubResource.to_json())

# convert the object into a dict
notification_hub_resource_dict = notification_hub_resource_instance.to_dict()
# create an instance of NotificationHubResource from a dict
notification_hub_resource_from_dict = NotificationHubResource.from_dict(notification_hub_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


