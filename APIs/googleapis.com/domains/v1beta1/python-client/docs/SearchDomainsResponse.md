# SearchDomainsResponse

Response for the `SearchDomains` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**register_parameters** | [**List[RegisterParameters]**](RegisterParameters.md) | Results of the domain name search. | [optional] 

## Example

```python
from openapi_client.models.search_domains_response import SearchDomainsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchDomainsResponse from a JSON string
search_domains_response_instance = SearchDomainsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchDomainsResponse.to_json())

# convert the object into a dict
search_domains_response_dict = search_domains_response_instance.to_dict()
# create an instance of SearchDomainsResponse from a dict
search_domains_response_from_dict = SearchDomainsResponse.from_dict(search_domains_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


