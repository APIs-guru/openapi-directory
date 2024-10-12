# BusinessChainSearchTerms

Search terms for Business Chain targeting options. At least one of the field should be populated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_chain_query** | **str** | The search query for the desired business chain. The query must be the full name of the business, e.g. \&quot;KFC\&quot;, \&quot;mercedes-benz\&quot;. | [optional] 
**region_query** | **str** | The search query for the desired geo region, e.g. \&quot;Seattle\&quot;, \&quot;United State\&quot;. | [optional] 

## Example

```python
from openapi_client.models.business_chain_search_terms import BusinessChainSearchTerms

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessChainSearchTerms from a JSON string
business_chain_search_terms_instance = BusinessChainSearchTerms.from_json(json)
# print the JSON string representation of the object
print(BusinessChainSearchTerms.to_json())

# convert the object into a dict
business_chain_search_terms_dict = business_chain_search_terms_instance.to_dict()
# create an instance of BusinessChainSearchTerms from a dict
business_chain_search_terms_from_dict = BusinessChainSearchTerms.from_dict(business_chain_search_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


