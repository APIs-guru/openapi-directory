# GeoRegionSearchTerms

Search terms for geo region targeting options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geo_region_query** | **str** | The search query for the desired geo region. The query can be a prefix, e.g. \&quot;New Yor\&quot;, \&quot;Seattle\&quot;, \&quot;USA\&quot;, etc. | [optional] 

## Example

```python
from openapi_client.models.geo_region_search_terms import GeoRegionSearchTerms

# TODO update the JSON string below
json = "{}"
# create an instance of GeoRegionSearchTerms from a JSON string
geo_region_search_terms_instance = GeoRegionSearchTerms.from_json(json)
# print the JSON string representation of the object
print(GeoRegionSearchTerms.to_json())

# convert the object into a dict
geo_region_search_terms_dict = geo_region_search_terms_instance.to_dict()
# create an instance of GeoRegionSearchTerms from a dict
geo_region_search_terms_from_dict = GeoRegionSearchTerms.from_dict(geo_region_search_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


