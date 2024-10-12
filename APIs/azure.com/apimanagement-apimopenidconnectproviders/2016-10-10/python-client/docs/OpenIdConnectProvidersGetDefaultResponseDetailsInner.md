# OpenIdConnectProvidersGetDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.open_id_connect_providers_get_default_response_details_inner import OpenIdConnectProvidersGetDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProvidersGetDefaultResponseDetailsInner from a JSON string
open_id_connect_providers_get_default_response_details_inner_instance = OpenIdConnectProvidersGetDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProvidersGetDefaultResponseDetailsInner.to_json())

# convert the object into a dict
open_id_connect_providers_get_default_response_details_inner_dict = open_id_connect_providers_get_default_response_details_inner_instance.to_dict()
# create an instance of OpenIdConnectProvidersGetDefaultResponseDetailsInner from a dict
open_id_connect_providers_get_default_response_details_inner_from_dict = OpenIdConnectProvidersGetDefaultResponseDetailsInner.from_dict(open_id_connect_providers_get_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


