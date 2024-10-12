# NetworkingConfig

Configuration options for networking connections in the Composer 2 environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_type** | **str** | Optional. Indicates the user requested specifc connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment. | [optional] 

## Example

```python
from openapi_client.models.networking_config import NetworkingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkingConfig from a JSON string
networking_config_instance = NetworkingConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkingConfig.to_json())

# convert the object into a dict
networking_config_dict = networking_config_instance.to_dict()
# create an instance of NetworkingConfig from a dict
networking_config_from_dict = NetworkingConfig.from_dict(networking_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


