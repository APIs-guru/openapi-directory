# NotificationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_user** | [**NotificationRelationshipsOwnerUser**](NotificationRelationshipsOwnerUser.md) |  | [optional] 
**resource** | [**NotificationRelationshipsResource**](NotificationRelationshipsResource.md) |  | [optional] 
**share** | [**NotificationRelationshipsShare**](NotificationRelationshipsShare.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_relationships import NotificationRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRelationships from a JSON string
notification_relationships_instance = NotificationRelationships.from_json(json)
# print the JSON string representation of the object
print(NotificationRelationships.to_json())

# convert the object into a dict
notification_relationships_dict = notification_relationships_instance.to_dict()
# create an instance of NotificationRelationships from a dict
notification_relationships_from_dict = NotificationRelationships.from_dict(notification_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


