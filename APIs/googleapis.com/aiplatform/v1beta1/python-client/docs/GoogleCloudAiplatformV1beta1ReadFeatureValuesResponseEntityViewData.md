# GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityViewData

Container to hold value(s), successive in time, for one Feature from the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**GoogleCloudAiplatformV1beta1FeatureValue**](GoogleCloudAiplatformV1beta1FeatureValue.md) |  | [optional] 
**values** | [**GoogleCloudAiplatformV1beta1FeatureValueList**](GoogleCloudAiplatformV1beta1FeatureValueList.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_read_feature_values_response_entity_view_data import GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityViewData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityViewData from a JSON string
google_cloud_aiplatform_v1beta1_read_feature_values_response_entity_view_data_instance = GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityViewData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityViewData.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_read_feature_values_response_entity_view_data_dict = google_cloud_aiplatform_v1beta1_read_feature_values_response_entity_view_data_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityViewData from a dict
google_cloud_aiplatform_v1beta1_read_feature_values_response_entity_view_data_from_dict = GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityViewData.from_dict(google_cloud_aiplatform_v1beta1_read_feature_values_response_entity_view_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


