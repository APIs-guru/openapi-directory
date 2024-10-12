# GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList

Response structure in the format of key (feature name) and (feature) value pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair]**](GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairListFeatureNameValuePair.md) | List of feature names and values. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list import GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList from a JSON string
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_instance = GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_dict = google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList from a dict
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_from_dict = GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList.from_dict(google_cloud_aiplatform_v1beta1_fetch_feature_values_response_feature_name_value_pair_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


