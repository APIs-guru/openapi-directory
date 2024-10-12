# IntegrationRuntimesListAuthKeys200Response

The integration runtime authentication keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_key1** | **str** | The primary integration runtime authentication key. | [optional] 
**auth_key2** | **str** | The secondary integration runtime authentication key. | [optional] 

## Example

```python
from openapi_client.models.integration_runtimes_list_auth_keys200_response import IntegrationRuntimesListAuthKeys200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimesListAuthKeys200Response from a JSON string
integration_runtimes_list_auth_keys200_response_instance = IntegrationRuntimesListAuthKeys200Response.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimesListAuthKeys200Response.to_json())

# convert the object into a dict
integration_runtimes_list_auth_keys200_response_dict = integration_runtimes_list_auth_keys200_response_instance.to_dict()
# create an instance of IntegrationRuntimesListAuthKeys200Response from a dict
integration_runtimes_list_auth_keys200_response_from_dict = IntegrationRuntimesListAuthKeys200Response.from_dict(integration_runtimes_list_auth_keys200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


