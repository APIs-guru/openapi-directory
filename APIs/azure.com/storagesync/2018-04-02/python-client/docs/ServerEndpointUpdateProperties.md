# ServerEndpointUpdateProperties

ServerEndpoint Update Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_tiering** | [**FeatureStatus**](FeatureStatus.md) |  | [optional] 
**volume_free_space_percent** | **int** | Level of free space to be maintained by Cloud Tiering if it is enabled. | [optional] 

## Example

```python
from openapi_client.models.server_endpoint_update_properties import ServerEndpointUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointUpdateProperties from a JSON string
server_endpoint_update_properties_instance = ServerEndpointUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointUpdateProperties.to_json())

# convert the object into a dict
server_endpoint_update_properties_dict = server_endpoint_update_properties_instance.to_dict()
# create an instance of ServerEndpointUpdateProperties from a dict
server_endpoint_update_properties_from_dict = ServerEndpointUpdateProperties.from_dict(server_endpoint_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


