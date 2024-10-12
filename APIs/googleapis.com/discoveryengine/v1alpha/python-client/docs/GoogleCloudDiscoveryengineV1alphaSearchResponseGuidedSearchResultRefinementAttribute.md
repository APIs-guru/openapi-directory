# GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute

Useful attribute for search result refinements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_key** | **str** | Attribute key used to refine the results e.g. &#39;movie_type&#39;. | [optional] 
**attribute_value** | **str** | Attribute value used to refine the results e.g. &#39;drama&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_refinement_attribute import GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute from a JSON string
google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_refinement_attribute_instance = GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_refinement_attribute_dict = google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_refinement_attribute_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute from a dict
google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_refinement_attribute_from_dict = GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute.from_dict(google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_refinement_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


