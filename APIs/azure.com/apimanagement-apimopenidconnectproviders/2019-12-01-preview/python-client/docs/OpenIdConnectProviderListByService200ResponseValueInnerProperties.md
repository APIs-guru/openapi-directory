# OpenIdConnectProviderListByService200ResponseValueInnerProperties

OpenID Connect Providers Contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID of developer console which is the client application. | 
**client_secret** | **str** | Client Secret of developer console which is the client application. | [optional] 
**description** | **str** | User-friendly description of OpenID Connect Provider. | [optional] 
**display_name** | **str** | User-friendly OpenID Connect Provider name. | 
**metadata_endpoint** | **str** | Metadata endpoint URI. | 

## Example

```python
from openapi_client.models.open_id_connect_provider_list_by_service200_response_value_inner_properties import OpenIdConnectProviderListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderListByService200ResponseValueInnerProperties from a JSON string
open_id_connect_provider_list_by_service200_response_value_inner_properties_instance = OpenIdConnectProviderListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
open_id_connect_provider_list_by_service200_response_value_inner_properties_dict = open_id_connect_provider_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of OpenIdConnectProviderListByService200ResponseValueInnerProperties from a dict
open_id_connect_provider_list_by_service200_response_value_inner_properties_from_dict = OpenIdConnectProviderListByService200ResponseValueInnerProperties.from_dict(open_id_connect_provider_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


