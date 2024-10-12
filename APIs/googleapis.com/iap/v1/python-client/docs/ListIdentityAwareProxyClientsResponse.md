# ListIdentityAwareProxyClientsResponse

Response message for ListIdentityAwareProxyClients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_aware_proxy_clients** | [**List[IdentityAwareProxyClient]**](IdentityAwareProxyClient.md) | Clients existing in the brand. | [optional] 
**next_page_token** | **str** | A token, which can be send as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_identity_aware_proxy_clients_response import ListIdentityAwareProxyClientsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListIdentityAwareProxyClientsResponse from a JSON string
list_identity_aware_proxy_clients_response_instance = ListIdentityAwareProxyClientsResponse.from_json(json)
# print the JSON string representation of the object
print(ListIdentityAwareProxyClientsResponse.to_json())

# convert the object into a dict
list_identity_aware_proxy_clients_response_dict = list_identity_aware_proxy_clients_response_instance.to_dict()
# create an instance of ListIdentityAwareProxyClientsResponse from a dict
list_identity_aware_proxy_clients_response_from_dict = ListIdentityAwareProxyClientsResponse.from_dict(list_identity_aware_proxy_clients_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


