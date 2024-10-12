# GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair

Feature name & value pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Feature short name. | [optional] 
**value** | [**GoogleCloudAiplatformV1beta1FeatureValue**](GoogleCloudAiplatformV1beta1FeatureValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_feature_name_value_pair import GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair from a JSON string
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_feature_name_value_pair_instance = GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_feature_name_value_pair_dict = google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_feature_name_value_pair_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair from a dict
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_feature_name_value_pair_from_dict = GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair.from_dict(google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_feature_name_value_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


