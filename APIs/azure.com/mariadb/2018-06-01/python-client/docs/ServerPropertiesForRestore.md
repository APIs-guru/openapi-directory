# ServerPropertiesForRestore

The properties used to create a new server by restoring from a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restore_point_in_time** | **datetime** | Restore point creation time (ISO8601 format), specifying the time to restore from. | 
**source_server_id** | **str** | The source server id to restore from. | 

## Example

```python
from openapi_client.models.server_properties_for_restore import ServerPropertiesForRestore

# TODO update the JSON string below
json = "{}"
# create an instance of ServerPropertiesForRestore from a JSON string
server_properties_for_restore_instance = ServerPropertiesForRestore.from_json(json)
# print the JSON string representation of the object
print(ServerPropertiesForRestore.to_json())

# convert the object into a dict
server_properties_for_restore_dict = server_properties_for_restore_instance.to_dict()
# create an instance of ServerPropertiesForRestore from a dict
server_properties_for_restore_from_dict = ServerPropertiesForRestore.from_dict(server_properties_for_restore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


