# GoogleCloudAiplatformV1beta1IdMatcher

Matcher for Features of an EntityType by Feature ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | Required. The following are accepted as &#x60;ids&#x60;: * A single-element list containing only &#x60;*&#x60;, which selects all Features in the target EntityType, or * A list containing only Feature IDs, which selects only Features with those IDs in the target EntityType. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_id_matcher import GoogleCloudAiplatformV1beta1IdMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1IdMatcher from a JSON string
google_cloud_aiplatform_v1beta1_id_matcher_instance = GoogleCloudAiplatformV1beta1IdMatcher.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1IdMatcher.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_id_matcher_dict = google_cloud_aiplatform_v1beta1_id_matcher_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1IdMatcher from a dict
google_cloud_aiplatform_v1beta1_id_matcher_from_dict = GoogleCloudAiplatformV1beta1IdMatcher.from_dict(google_cloud_aiplatform_v1beta1_id_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


