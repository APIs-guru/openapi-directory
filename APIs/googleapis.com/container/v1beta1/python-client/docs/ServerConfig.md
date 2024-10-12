# ServerConfig

Kubernetes Engine service configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**List[ReleaseChannelConfig]**](ReleaseChannelConfig.md) | List of release channel configurations. | [optional] 
**default_cluster_version** | **str** | Version of Kubernetes the service deploys by default. | [optional] 
**default_image_type** | **str** | Default image type. | [optional] 
**valid_image_types** | **List[str]** | List of valid image types. | [optional] 
**valid_master_versions** | **List[str]** | List of valid master versions, in descending order. | [optional] 
**valid_node_versions** | **List[str]** | List of valid node upgrade target versions, in descending order. | [optional] 
**windows_version_maps** | [**Dict[str, WindowsVersions]**](WindowsVersions.md) | Maps of Kubernetes version and supported Windows server versions. | [optional] 

## Example

```python
from openapi_client.models.server_config import ServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServerConfig from a JSON string
server_config_instance = ServerConfig.from_json(json)
# print the JSON string representation of the object
print(ServerConfig.to_json())

# convert the object into a dict
server_config_dict = server_config_instance.to_dict()
# create an instance of ServerConfig from a dict
server_config_from_dict = ServerConfig.from_dict(server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


