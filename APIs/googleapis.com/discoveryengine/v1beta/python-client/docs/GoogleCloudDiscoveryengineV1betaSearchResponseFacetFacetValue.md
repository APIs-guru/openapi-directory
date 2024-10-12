# GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue

A facet value which contains value names and their count.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Number of items that have this facet value. | [optional] 
**interval** | [**GoogleCloudDiscoveryengineV1betaInterval**](GoogleCloudDiscoveryengineV1betaInterval.md) |  | [optional] 
**value** | **str** | Text value of a facet, such as \&quot;Black\&quot; for facet \&quot;colors\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response_facet_facet_value import GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue from a JSON string
google_cloud_discoveryengine_v1beta_search_response_facet_facet_value_instance = GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_facet_facet_value_dict = google_cloud_discoveryengine_v1beta_search_response_facet_facet_value_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue from a dict
google_cloud_discoveryengine_v1beta_search_response_facet_facet_value_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue.from_dict(google_cloud_discoveryengine_v1beta_search_response_facet_facet_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


