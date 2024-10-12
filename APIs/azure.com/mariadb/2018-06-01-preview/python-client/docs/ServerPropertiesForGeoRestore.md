# ServerPropertiesForGeoRestore

The properties used to create a new server by restoring to a different region from a geo replicated backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_server_id** | **str** | The source server id to restore from. | 

## Example

```python
from openapi_client.models.server_properties_for_geo_restore import ServerPropertiesForGeoRestore

# TODO update the JSON string below
json = "{}"
# create an instance of ServerPropertiesForGeoRestore from a JSON string
server_properties_for_geo_restore_instance = ServerPropertiesForGeoRestore.from_json(json)
# print the JSON string representation of the object
print(ServerPropertiesForGeoRestore.to_json())

# convert the object into a dict
server_properties_for_geo_restore_dict = server_properties_for_geo_restore_instance.to_dict()
# create an instance of ServerPropertiesForGeoRestore from a dict
server_properties_for_geo_restore_from_dict = ServerPropertiesForGeoRestore.from_dict(server_properties_for_geo_restore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


