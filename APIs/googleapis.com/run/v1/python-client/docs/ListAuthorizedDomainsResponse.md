# ListAuthorizedDomainsResponse

A list of Authorized Domains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | [**List[AuthorizedDomain]**](AuthorizedDomain.md) | The authorized domains belonging to the user. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_authorized_domains_response import ListAuthorizedDomainsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuthorizedDomainsResponse from a JSON string
list_authorized_domains_response_instance = ListAuthorizedDomainsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAuthorizedDomainsResponse.to_json())

# convert the object into a dict
list_authorized_domains_response_dict = list_authorized_domains_response_instance.to_dict()
# create an instance of ListAuthorizedDomainsResponse from a dict
list_authorized_domains_response_from_dict = ListAuthorizedDomainsResponse.from_dict(list_authorized_domains_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


