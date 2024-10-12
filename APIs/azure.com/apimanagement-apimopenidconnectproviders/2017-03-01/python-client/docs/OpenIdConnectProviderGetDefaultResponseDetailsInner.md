# OpenIdConnectProviderGetDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.open_id_connect_provider_get_default_response_details_inner import OpenIdConnectProviderGetDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderGetDefaultResponseDetailsInner from a JSON string
open_id_connect_provider_get_default_response_details_inner_instance = OpenIdConnectProviderGetDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderGetDefaultResponseDetailsInner.to_json())

# convert the object into a dict
open_id_connect_provider_get_default_response_details_inner_dict = open_id_connect_provider_get_default_response_details_inner_instance.to_dict()
# create an instance of OpenIdConnectProviderGetDefaultResponseDetailsInner from a dict
open_id_connect_provider_get_default_response_details_inner_from_dict = OpenIdConnectProviderGetDefaultResponseDetailsInner.from_dict(open_id_connect_provider_get_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


