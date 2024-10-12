# GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain

Domain details of the input feature value. Provides numeric information about the feature, such as its range (min, max). If the feature has been pre-processed, for example with z-scoring, then it provides information about how to recover the original feature. For example, if the input feature is an image and it has been pre-processed to obtain 0-mean and stddev = 1 values, then original_mean, and original_stddev refer to the mean and stddev of the original feature (e.g. image tensor) from which input feature (with mean = 0 and stddev = 1) was obtained.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | **float** | The maximum permissible value for this feature. | [optional] 
**min_value** | **float** | The minimum permissible value for this feature. | [optional] 
**original_mean** | **float** | If this input feature has been normalized to a mean value of 0, the original_mean specifies the mean value of the domain prior to normalization. | [optional] 
**original_stddev** | **float** | If this input feature has been normalized to a standard deviation of 1.0, the original_stddev specifies the standard deviation of the domain prior to normalization. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_feature_value_domain import GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain from a JSON string
google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_feature_value_domain_instance = GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_feature_value_domain_dict = google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_feature_value_domain_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain from a dict
google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_feature_value_domain_from_dict = GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain.from_dict(google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_feature_value_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


