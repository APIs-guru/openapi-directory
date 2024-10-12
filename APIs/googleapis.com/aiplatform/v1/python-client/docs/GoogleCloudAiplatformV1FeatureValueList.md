# GoogleCloudAiplatformV1FeatureValueList

Container for list of values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[GoogleCloudAiplatformV1FeatureValue]**](GoogleCloudAiplatformV1FeatureValue.md) | A list of feature values. All of them should be the same data type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_feature_value_list import GoogleCloudAiplatformV1FeatureValueList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeatureValueList from a JSON string
google_cloud_aiplatform_v1_feature_value_list_instance = GoogleCloudAiplatformV1FeatureValueList.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeatureValueList.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_feature_value_list_dict = google_cloud_aiplatform_v1_feature_value_list_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeatureValueList from a dict
google_cloud_aiplatform_v1_feature_value_list_from_dict = GoogleCloudAiplatformV1FeatureValueList.from_dict(google_cloud_aiplatform_v1_feature_value_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


