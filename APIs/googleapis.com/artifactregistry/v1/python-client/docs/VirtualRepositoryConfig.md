# VirtualRepositoryConfig

Virtual repository configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upstream_policies** | [**List[UpstreamPolicy]**](UpstreamPolicy.md) | Policies that configure the upstream artifacts distributed by the Virtual Repository. Upstream policies cannot be set on a standard repository. | [optional] 

## Example

```python
from openapi_client.models.virtual_repository_config import VirtualRepositoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRepositoryConfig from a JSON string
virtual_repository_config_instance = VirtualRepositoryConfig.from_json(json)
# print the JSON string representation of the object
print(VirtualRepositoryConfig.to_json())

# convert the object into a dict
virtual_repository_config_dict = virtual_repository_config_instance.to_dict()
# create an instance of VirtualRepositoryConfig from a dict
virtual_repository_config_from_dict = VirtualRepositoryConfig.from_dict(virtual_repository_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


