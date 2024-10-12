# GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig

OnlineServingConfig specifies the details for provisioning online serving resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_node_count** | **int** | The number of nodes for the online store. The number of nodes doesn&#39;t scale automatically, but you can manually update the number of nodes. If set to 0, the featurestore will not have an online store and cannot be used for online serving. | [optional] 
**scaling** | [**GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling**](GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_featurestore_online_serving_config import GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig from a JSON string
google_cloud_aiplatform_v1_featurestore_online_serving_config_instance = GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_featurestore_online_serving_config_dict = google_cloud_aiplatform_v1_featurestore_online_serving_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig from a dict
google_cloud_aiplatform_v1_featurestore_online_serving_config_from_dict = GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig.from_dict(google_cloud_aiplatform_v1_featurestore_online_serving_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


