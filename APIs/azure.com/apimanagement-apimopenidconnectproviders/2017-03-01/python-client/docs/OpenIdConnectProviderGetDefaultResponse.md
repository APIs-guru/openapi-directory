# OpenIdConnectProviderGetDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[OpenIdConnectProviderGetDefaultResponseDetailsInner]**](OpenIdConnectProviderGetDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.open_id_connect_provider_get_default_response import OpenIdConnectProviderGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderGetDefaultResponse from a JSON string
open_id_connect_provider_get_default_response_instance = OpenIdConnectProviderGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderGetDefaultResponse.to_json())

# convert the object into a dict
open_id_connect_provider_get_default_response_dict = open_id_connect_provider_get_default_response_instance.to_dict()
# create an instance of OpenIdConnectProviderGetDefaultResponse from a dict
open_id_connect_provider_get_default_response_from_dict = OpenIdConnectProviderGetDefaultResponse.from_dict(open_id_connect_provider_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


