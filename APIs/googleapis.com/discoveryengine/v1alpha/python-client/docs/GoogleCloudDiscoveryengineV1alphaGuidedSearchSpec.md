# GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec

Defines guided search spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_refinement_attributes** | **bool** | Whether or not to enable and include refinement attributes in gudied search result. | [optional] 
**enable_related_questions** | **bool** | Whether or not to enable and include related questions in search response. | [optional] 
**max_related_questions** | **int** | Max number of related questions to be returned. The valid range is [1, 5]. If enable_related_questions is true, the default value is 3. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_guided_search_spec import GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec from a JSON string
google_cloud_discoveryengine_v1alpha_guided_search_spec_instance = GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_guided_search_spec_dict = google_cloud_discoveryengine_v1alpha_guided_search_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec from a dict
google_cloud_discoveryengine_v1alpha_guided_search_spec_from_dict = GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec.from_dict(google_cloud_discoveryengine_v1alpha_guided_search_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


