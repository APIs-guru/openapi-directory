# GoogleCloudRetailV2betaSearchResponseFacet

A facet result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_facet** | **bool** | Whether the facet is dynamically generated. | [optional] 
**key** | **str** | The key for this facet. E.g., \&quot;colorFamilies\&quot; or \&quot;price\&quot; or \&quot;attributes.attr1\&quot;. | [optional] 
**values** | [**List[GoogleCloudRetailV2betaSearchResponseFacetFacetValue]**](GoogleCloudRetailV2betaSearchResponseFacetFacetValue.md) | The facet values for this field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_search_response_facet import GoogleCloudRetailV2betaSearchResponseFacet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaSearchResponseFacet from a JSON string
google_cloud_retail_v2beta_search_response_facet_instance = GoogleCloudRetailV2betaSearchResponseFacet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaSearchResponseFacet.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_search_response_facet_dict = google_cloud_retail_v2beta_search_response_facet_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaSearchResponseFacet from a dict
google_cloud_retail_v2beta_search_response_facet_from_dict = GoogleCloudRetailV2betaSearchResponseFacet.from_dict(google_cloud_retail_v2beta_search_response_facet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


