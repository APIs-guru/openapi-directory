# GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult

Guided search result. The guided search helps user to refine the search results and narrow down to the real needs from a broaded search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**follow_up_questions** | **List[str]** | Suggested follow-up questions. | [optional] 
**refinement_attributes** | [**List[GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute]**](GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute.md) | A list of ranked refinement attributes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_response_guided_search_result import GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult from a JSON string
google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_instance = GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_dict = google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult from a dict
google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_from_dict = GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult.from_dict(google_cloud_discoveryengine_v1alpha_search_response_guided_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


