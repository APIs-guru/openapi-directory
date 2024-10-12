# PoiSearchTerms

Search terms for POI targeting options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**poi_query** | **str** | The search query for the desired POI name, street address, or coordinate of the desired POI. The query can be a prefix, e.g. \&quot;Times squar\&quot;, \&quot;40.7505045,-73.99562\&quot;, \&quot;315 W 44th St\&quot;, etc. | [optional] 

## Example

```python
from openapi_client.models.poi_search_terms import PoiSearchTerms

# TODO update the JSON string below
json = "{}"
# create an instance of PoiSearchTerms from a JSON string
poi_search_terms_instance = PoiSearchTerms.from_json(json)
# print the JSON string representation of the object
print(PoiSearchTerms.to_json())

# convert the object into a dict
poi_search_terms_dict = poi_search_terms_instance.to_dict()
# create an instance of PoiSearchTerms from a dict
poi_search_terms_from_dict = PoiSearchTerms.from_dict(poi_search_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


