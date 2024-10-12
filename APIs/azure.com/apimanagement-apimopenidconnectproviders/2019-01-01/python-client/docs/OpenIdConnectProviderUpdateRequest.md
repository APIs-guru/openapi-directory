# OpenIdConnectProviderUpdateRequest

Parameters supplied to the Update OpenID Connect Provider operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OpenIdConnectProviderUpdateRequestProperties**](OpenIdConnectProviderUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.open_id_connect_provider_update_request import OpenIdConnectProviderUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderUpdateRequest from a JSON string
open_id_connect_provider_update_request_instance = OpenIdConnectProviderUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderUpdateRequest.to_json())

# convert the object into a dict
open_id_connect_provider_update_request_dict = open_id_connect_provider_update_request_instance.to_dict()
# create an instance of OpenIdConnectProviderUpdateRequest from a dict
open_id_connect_provider_update_request_from_dict = OpenIdConnectProviderUpdateRequest.from_dict(open_id_connect_provider_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


