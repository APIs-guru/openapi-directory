# ListGatewaySecurityPoliciesResponse

Response returned by the ListGatewaySecurityPolicies method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_security_policies** | [**List[GatewaySecurityPolicy]**](GatewaySecurityPolicy.md) | List of GatewaySecurityPolicies resources. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#39;next_page_token&#39; is included. To get the next set of results, call this method again using the value of &#39;next_page_token&#39; as &#39;page_token&#39;. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_gateway_security_policies_response import ListGatewaySecurityPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGatewaySecurityPoliciesResponse from a JSON string
list_gateway_security_policies_response_instance = ListGatewaySecurityPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListGatewaySecurityPoliciesResponse.to_json())

# convert the object into a dict
list_gateway_security_policies_response_dict = list_gateway_security_policies_response_instance.to_dict()
# create an instance of ListGatewaySecurityPoliciesResponse from a dict
list_gateway_security_policies_response_from_dict = ListGatewaySecurityPoliciesResponse.from_dict(list_gateway_security_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


