# ServerPropertiesForReplica

The properties to create a new replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_server_id** | **str** | The master server id to create replica from. | 

## Example

```python
from openapi_client.models.server_properties_for_replica import ServerPropertiesForReplica

# TODO update the JSON string below
json = "{}"
# create an instance of ServerPropertiesForReplica from a JSON string
server_properties_for_replica_instance = ServerPropertiesForReplica.from_json(json)
# print the JSON string representation of the object
print(ServerPropertiesForReplica.to_json())

# convert the object into a dict
server_properties_for_replica_dict = server_properties_for_replica_instance.to_dict()
# create an instance of ServerPropertiesForReplica from a dict
server_properties_for_replica_from_dict = ServerPropertiesForReplica.from_dict(server_properties_for_replica_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


