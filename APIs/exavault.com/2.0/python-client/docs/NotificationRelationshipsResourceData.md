# NotificationRelationshipsResourceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_relationships_resource_data import NotificationRelationshipsResourceData

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRelationshipsResourceData from a JSON string
notification_relationships_resource_data_instance = NotificationRelationshipsResourceData.from_json(json)
# print the JSON string representation of the object
print(NotificationRelationshipsResourceData.to_json())

# convert the object into a dict
notification_relationships_resource_data_dict = notification_relationships_resource_data_instance.to_dict()
# create an instance of NotificationRelationshipsResourceData from a dict
notification_relationships_resource_data_from_dict = NotificationRelationshipsResourceData.from_dict(notification_relationships_resource_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


