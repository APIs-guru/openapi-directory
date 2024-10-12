# IdentityServiceConfig

IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to enable the Identity Service component | [optional] 

## Example

```python
from openapi_client.models.identity_service_config import IdentityServiceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityServiceConfig from a JSON string
identity_service_config_instance = IdentityServiceConfig.from_json(json)
# print the JSON string representation of the object
print(IdentityServiceConfig.to_json())

# convert the object into a dict
identity_service_config_dict = identity_service_config_instance.to_dict()
# create an instance of IdentityServiceConfig from a dict
identity_service_config_from_dict = IdentityServiceConfig.from_dict(identity_service_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


