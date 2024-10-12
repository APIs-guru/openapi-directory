# RetrieveImportableDomainsResponse

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). Response for the `RetrieveImportableDomains` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | [**List[Domain]**](Domain.md) | A list of domains that the calling user manages in Google Domains. | [optional] 
**next_page_token** | **str** | When present, there are more results to retrieve. Set &#x60;page_token&#x60; to this value on a subsequent call to get the next page of results. | [optional] 

## Example

```python
from openapi_client.models.retrieve_importable_domains_response import RetrieveImportableDomainsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveImportableDomainsResponse from a JSON string
retrieve_importable_domains_response_instance = RetrieveImportableDomainsResponse.from_json(json)
# print the JSON string representation of the object
print(RetrieveImportableDomainsResponse.to_json())

# convert the object into a dict
retrieve_importable_domains_response_dict = retrieve_importable_domains_response_instance.to_dict()
# create an instance of RetrieveImportableDomainsResponse from a dict
retrieve_importable_domains_response_from_dict = RetrieveImportableDomainsResponse.from_dict(retrieve_importable_domains_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


