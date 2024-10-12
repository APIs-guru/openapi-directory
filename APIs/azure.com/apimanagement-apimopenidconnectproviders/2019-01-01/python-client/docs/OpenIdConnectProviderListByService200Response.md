# OpenIdConnectProviderListByService200Response

Paged OpenIdProviders list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[OpenIdConnectProviderListByService200ResponseValueInner]**](OpenIdConnectProviderListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.open_id_connect_provider_list_by_service200_response import OpenIdConnectProviderListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderListByService200Response from a JSON string
open_id_connect_provider_list_by_service200_response_instance = OpenIdConnectProviderListByService200Response.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderListByService200Response.to_json())

# convert the object into a dict
open_id_connect_provider_list_by_service200_response_dict = open_id_connect_provider_list_by_service200_response_instance.to_dict()
# create an instance of OpenIdConnectProviderListByService200Response from a dict
open_id_connect_provider_list_by_service200_response_from_dict = OpenIdConnectProviderListByService200Response.from_dict(open_id_connect_provider_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


