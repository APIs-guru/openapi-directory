# GoogleCloudRetailV2alphaSearchResponseFacet

A facet result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_facet** | **bool** | Whether the facet is dynamically generated. | [optional] 
**key** | **str** | The key for this facet. E.g., \&quot;colorFamilies\&quot; or \&quot;price\&quot; or \&quot;attributes.attr1\&quot;. | [optional] 
**values** | [**List[GoogleCloudRetailV2alphaSearchResponseFacetFacetValue]**](GoogleCloudRetailV2alphaSearchResponseFacetFacetValue.md) | The facet values for this field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_search_response_facet import GoogleCloudRetailV2alphaSearchResponseFacet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaSearchResponseFacet from a JSON string
google_cloud_retail_v2alpha_search_response_facet_instance = GoogleCloudRetailV2alphaSearchResponseFacet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaSearchResponseFacet.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_search_response_facet_dict = google_cloud_retail_v2alpha_search_response_facet_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaSearchResponseFacet from a dict
google_cloud_retail_v2alpha_search_response_facet_from_dict = GoogleCloudRetailV2alphaSearchResponseFacet.from_dict(google_cloud_retail_v2alpha_search_response_facet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


