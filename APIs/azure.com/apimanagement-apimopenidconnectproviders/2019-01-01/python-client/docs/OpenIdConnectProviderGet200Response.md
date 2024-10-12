# OpenIdConnectProviderGet200Response

OpenId Connect Provider details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OpenIdConnectProviderListByService200ResponseValueInnerProperties**](OpenIdConnectProviderListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.open_id_connect_provider_get200_response import OpenIdConnectProviderGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderGet200Response from a JSON string
open_id_connect_provider_get200_response_instance = OpenIdConnectProviderGet200Response.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderGet200Response.to_json())

# convert the object into a dict
open_id_connect_provider_get200_response_dict = open_id_connect_provider_get200_response_instance.to_dict()
# create an instance of OpenIdConnectProviderGet200Response from a dict
open_id_connect_provider_get200_response_from_dict = OpenIdConnectProviderGet200Response.from_dict(open_id_connect_provider_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


