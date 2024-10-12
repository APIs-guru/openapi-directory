# NotificationRelationshipsResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**NotificationRelationshipsResourceData**](NotificationRelationshipsResourceData.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_relationships_resource import NotificationRelationshipsResource

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRelationshipsResource from a JSON string
notification_relationships_resource_instance = NotificationRelationshipsResource.from_json(json)
# print the JSON string representation of the object
print(NotificationRelationshipsResource.to_json())

# convert the object into a dict
notification_relationships_resource_dict = notification_relationships_resource_instance.to_dict()
# create an instance of NotificationRelationshipsResource from a dict
notification_relationships_resource_from_dict = NotificationRelationshipsResource.from_dict(notification_relationships_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


