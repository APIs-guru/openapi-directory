# ListCustomDomainsResponse

The response from `ListCustomDomains`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_domains** | [**List[CustomDomain]**](CustomDomain.md) | A list of &#x60;CustomDomain&#x60; entities associated with the specified Firebase &#x60;Site&#x60;. | [optional] 
**next_page_token** | **str** | The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to &#x60;ListCustomDomains&#x60;. Page tokens are short-lived and should not be stored. | [optional] 

## Example

```python
from openapi_client.models.list_custom_domains_response import ListCustomDomainsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomDomainsResponse from a JSON string
list_custom_domains_response_instance = ListCustomDomainsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomDomainsResponse.to_json())

# convert the object into a dict
list_custom_domains_response_dict = list_custom_domains_response_instance.to_dict()
# create an instance of ListCustomDomainsResponse from a dict
list_custom_domains_response_from_dict = ListCustomDomainsResponse.from_dict(list_custom_domains_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


