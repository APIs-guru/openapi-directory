# DefaultClusterConfig

DefaultClusterConfig describes the default cluster configurations to be applied to all clusters born-in-fleet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_authorization_config** | [**BinaryAuthorizationConfig**](BinaryAuthorizationConfig.md) |  | [optional] 
**security_posture_config** | [**SecurityPostureConfig**](SecurityPostureConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.default_cluster_config import DefaultClusterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultClusterConfig from a JSON string
default_cluster_config_instance = DefaultClusterConfig.from_json(json)
# print the JSON string representation of the object
print(DefaultClusterConfig.to_json())

# convert the object into a dict
default_cluster_config_dict = default_cluster_config_instance.to_dict()
# create an instance of DefaultClusterConfig from a dict
default_cluster_config_from_dict = DefaultClusterConfig.from_dict(default_cluster_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


