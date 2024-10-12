# OpenIdConnectProviderListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**OpenIdConnectProviderListByServiceDefaultResponseError**](OpenIdConnectProviderListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.open_id_connect_provider_list_by_service_default_response import OpenIdConnectProviderListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderListByServiceDefaultResponse from a JSON string
open_id_connect_provider_list_by_service_default_response_instance = OpenIdConnectProviderListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderListByServiceDefaultResponse.to_json())

# convert the object into a dict
open_id_connect_provider_list_by_service_default_response_dict = open_id_connect_provider_list_by_service_default_response_instance.to_dict()
# create an instance of OpenIdConnectProviderListByServiceDefaultResponse from a dict
open_id_connect_provider_list_by_service_default_response_from_dict = OpenIdConnectProviderListByServiceDefaultResponse.from_dict(open_id_connect_provider_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


