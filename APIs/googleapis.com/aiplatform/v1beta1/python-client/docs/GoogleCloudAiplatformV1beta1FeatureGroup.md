# GoogleCloudAiplatformV1beta1FeatureGroup

Vertex AI Feature Group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query** | [**GoogleCloudAiplatformV1beta1FeatureGroupBigQuery**](GoogleCloudAiplatformV1beta1FeatureGroupBigQuery.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp when this FeatureGroup was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of the FeatureGroup. | [optional] 
**etag** | **str** | Optional. Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize your FeatureGroup. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one FeatureGroup(System labels are excluded).\&quot; System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**name** | **str** | Identifier. Name of the FeatureGroup. Format: &#x60;projects/{project}/locations/{location}/featureGroups/{featureGroup}&#x60; | [optional] 
**update_time** | **str** | Output only. Timestamp when this FeatureGroup was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_group import GoogleCloudAiplatformV1beta1FeatureGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureGroup from a JSON string
google_cloud_aiplatform_v1beta1_feature_group_instance = GoogleCloudAiplatformV1beta1FeatureGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureGroup.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_group_dict = google_cloud_aiplatform_v1beta1_feature_group_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureGroup from a dict
google_cloud_aiplatform_v1beta1_feature_group_from_dict = GoogleCloudAiplatformV1beta1FeatureGroup.from_dict(google_cloud_aiplatform_v1beta1_feature_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


