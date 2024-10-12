# GoogleCloudAiplatformV1beta1SampledShapleyAttribution

An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_count** | **int** | Required. The number of feature permutations to consider when approximating the Shapley values. Valid range of its value is [1, 50], inclusively. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_sampled_shapley_attribution import GoogleCloudAiplatformV1beta1SampledShapleyAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SampledShapleyAttribution from a JSON string
google_cloud_aiplatform_v1beta1_sampled_shapley_attribution_instance = GoogleCloudAiplatformV1beta1SampledShapleyAttribution.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SampledShapleyAttribution.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_sampled_shapley_attribution_dict = google_cloud_aiplatform_v1beta1_sampled_shapley_attribution_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SampledShapleyAttribution from a dict
google_cloud_aiplatform_v1beta1_sampled_shapley_attribution_from_dict = GoogleCloudAiplatformV1beta1SampledShapleyAttribution.from_dict(google_cloud_aiplatform_v1beta1_sampled_shapley_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


