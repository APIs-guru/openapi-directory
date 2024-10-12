# DomainListingResults



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | [**List[DomainInformation]**](DomainInformation.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.domain_listing_results import DomainListingResults

# TODO update the JSON string below
json = "{}"
# create an instance of DomainListingResults from a JSON string
domain_listing_results_instance = DomainListingResults.from_json(json)
# print the JSON string representation of the object
print(DomainListingResults.to_json())

# convert the object into a dict
domain_listing_results_dict = domain_listing_results_instance.to_dict()
# create an instance of DomainListingResults from a dict
domain_listing_results_from_dict = DomainListingResults.from_dict(domain_listing_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


