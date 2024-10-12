# GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint

The dedicated serving endpoint for this FeatureOnlineStore. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default. Note, for EmbeddingManagement use case, only [DedicatedServingEndpoint.public_endpoint_domain_name] is available now.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_service_connect_config** | [**GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig**](GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig.md) |  | [optional] 
**public_endpoint_domain_name** | **str** | Output only. This field will be populated with the domain name to use for this FeatureOnlineStore | [optional] [readonly] 
**service_attachment** | **str** | Output only. The name of the service attachment resource. Populated if private service connect is enabled and after FeatureViewSync is created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_online_store_dedicated_serving_endpoint import GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint from a JSON string
google_cloud_aiplatform_v1beta1_feature_online_store_dedicated_serving_endpoint_instance = GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_online_store_dedicated_serving_endpoint_dict = google_cloud_aiplatform_v1beta1_feature_online_store_dedicated_serving_endpoint_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint from a dict
google_cloud_aiplatform_v1beta1_feature_online_store_dedicated_serving_endpoint_from_dict = GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint.from_dict(google_cloud_aiplatform_v1beta1_feature_online_store_dedicated_serving_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


