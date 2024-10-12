# ListDomainsResponse

Response message for ListDomains

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | [**List[Domain]**](Domain.md) | A list of Managed Identities Service domains in the project. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | A list of locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_domains_response import ListDomainsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDomainsResponse from a JSON string
list_domains_response_instance = ListDomainsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDomainsResponse.to_json())

# convert the object into a dict
list_domains_response_dict = list_domains_response_instance.to_dict()
# create an instance of ListDomainsResponse from a dict
list_domains_response_from_dict = ListDomainsResponse.from_dict(list_domains_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


