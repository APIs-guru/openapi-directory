# GoogleCloudRetailV2betaSearchResponseFacetFacetValue

A facet value which contains value names and their count.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Number of items that have this facet value. | [optional] 
**interval** | [**GoogleCloudRetailV2betaInterval**](GoogleCloudRetailV2betaInterval.md) |  | [optional] 
**max_value** | **float** | The maximum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true. | [optional] 
**min_value** | **float** | The minimum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true. | [optional] 
**value** | **str** | Text value of a facet, such as \&quot;Black\&quot; for facet \&quot;colorFamilies\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_search_response_facet_facet_value import GoogleCloudRetailV2betaSearchResponseFacetFacetValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaSearchResponseFacetFacetValue from a JSON string
google_cloud_retail_v2beta_search_response_facet_facet_value_instance = GoogleCloudRetailV2betaSearchResponseFacetFacetValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaSearchResponseFacetFacetValue.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_search_response_facet_facet_value_dict = google_cloud_retail_v2beta_search_response_facet_facet_value_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaSearchResponseFacetFacetValue from a dict
google_cloud_retail_v2beta_search_response_facet_facet_value_from_dict = GoogleCloudRetailV2betaSearchResponseFacetFacetValue.from_dict(google_cloud_retail_v2beta_search_response_facet_facet_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


