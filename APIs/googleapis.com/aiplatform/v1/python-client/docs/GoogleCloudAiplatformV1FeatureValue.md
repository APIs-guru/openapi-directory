# GoogleCloudAiplatformV1FeatureValue

Value for a feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_array_value** | [**GoogleCloudAiplatformV1BoolArray**](GoogleCloudAiplatformV1BoolArray.md) |  | [optional] 
**bool_value** | **bool** | Bool type feature value. | [optional] 
**bytes_value** | **bytearray** | Bytes feature value. | [optional] 
**double_array_value** | [**GoogleCloudAiplatformV1DoubleArray**](GoogleCloudAiplatformV1DoubleArray.md) |  | [optional] 
**double_value** | **float** | Double type feature value. | [optional] 
**int64_array_value** | [**GoogleCloudAiplatformV1Int64Array**](GoogleCloudAiplatformV1Int64Array.md) |  | [optional] 
**int64_value** | **str** | Int64 feature value. | [optional] 
**metadata** | [**GoogleCloudAiplatformV1FeatureValueMetadata**](GoogleCloudAiplatformV1FeatureValueMetadata.md) |  | [optional] 
**string_array_value** | [**GoogleCloudAiplatformV1StringArray**](GoogleCloudAiplatformV1StringArray.md) |  | [optional] 
**string_value** | **str** | String feature value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_feature_value import GoogleCloudAiplatformV1FeatureValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeatureValue from a JSON string
google_cloud_aiplatform_v1_feature_value_instance = GoogleCloudAiplatformV1FeatureValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeatureValue.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_feature_value_dict = google_cloud_aiplatform_v1_feature_value_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeatureValue from a dict
google_cloud_aiplatform_v1_feature_value_from_dict = GoogleCloudAiplatformV1FeatureValue.from_dict(google_cloud_aiplatform_v1_feature_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


