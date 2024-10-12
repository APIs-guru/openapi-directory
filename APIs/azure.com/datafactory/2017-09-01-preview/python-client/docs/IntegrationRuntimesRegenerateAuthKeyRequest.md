# IntegrationRuntimesRegenerateAuthKeyRequest

Parameters to regenerate the authentication key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | The name of the authentication key to regenerate. | [optional] 

## Example

```python
from openapi_client.models.integration_runtimes_regenerate_auth_key_request import IntegrationRuntimesRegenerateAuthKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimesRegenerateAuthKeyRequest from a JSON string
integration_runtimes_regenerate_auth_key_request_instance = IntegrationRuntimesRegenerateAuthKeyRequest.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimesRegenerateAuthKeyRequest.to_json())

# convert the object into a dict
integration_runtimes_regenerate_auth_key_request_dict = integration_runtimes_regenerate_auth_key_request_instance.to_dict()
# create an instance of IntegrationRuntimesRegenerateAuthKeyRequest from a dict
integration_runtimes_regenerate_auth_key_request_from_dict = IntegrationRuntimesRegenerateAuthKeyRequest.from_dict(integration_runtimes_regenerate_auth_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


