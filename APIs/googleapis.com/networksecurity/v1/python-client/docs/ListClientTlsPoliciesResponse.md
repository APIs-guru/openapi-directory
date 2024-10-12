# ListClientTlsPoliciesResponse

Response returned by the ListClientTlsPolicies method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_tls_policies** | [**List[ClientTlsPolicy]**](ClientTlsPolicy.md) | List of ClientTlsPolicy resources. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_client_tls_policies_response import ListClientTlsPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListClientTlsPoliciesResponse from a JSON string
list_client_tls_policies_response_instance = ListClientTlsPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListClientTlsPoliciesResponse.to_json())

# convert the object into a dict
list_client_tls_policies_response_dict = list_client_tls_policies_response_instance.to_dict()
# create an instance of ListClientTlsPoliciesResponse from a dict
list_client_tls_policies_response_from_dict = ListClientTlsPoliciesResponse.from_dict(list_client_tls_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


