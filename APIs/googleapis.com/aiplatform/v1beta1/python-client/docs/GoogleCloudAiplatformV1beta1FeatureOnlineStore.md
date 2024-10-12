# GoogleCloudAiplatformV1beta1FeatureOnlineStore

Vertex AI Feature Online Store provides a centralized repository for serving ML features and embedding indexes at low latency. The Feature Online Store is a top-level container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigtable** | [**GoogleCloudAiplatformV1beta1FeatureOnlineStoreBigtable**](GoogleCloudAiplatformV1beta1FeatureOnlineStoreBigtable.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp when this FeatureOnlineStore was created. | [optional] [readonly] 
**dedicated_serving_endpoint** | [**GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint**](GoogleCloudAiplatformV1beta1FeatureOnlineStoreDedicatedServingEndpoint.md) |  | [optional] 
**embedding_management** | [**GoogleCloudAiplatformV1beta1FeatureOnlineStoreEmbeddingManagement**](GoogleCloudAiplatformV1beta1FeatureOnlineStoreEmbeddingManagement.md) |  | [optional] 
**etag** | **str** | Optional. Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize your FeatureOnlineStore. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one FeatureOnlineStore(System labels are excluded).\&quot; System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**name** | **str** | Identifier. Name of the FeatureOnlineStore. Format: &#x60;projects/{project}/locations/{location}/featureOnlineStores/{featureOnlineStore}&#x60; | [optional] 
**optimized** | **object** | Optimized storage type | [optional] 
**state** | **str** | Output only. State of the featureOnlineStore. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this FeatureOnlineStore was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_online_store import GoogleCloudAiplatformV1beta1FeatureOnlineStore

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureOnlineStore from a JSON string
google_cloud_aiplatform_v1beta1_feature_online_store_instance = GoogleCloudAiplatformV1beta1FeatureOnlineStore.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureOnlineStore.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_online_store_dict = google_cloud_aiplatform_v1beta1_feature_online_store_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureOnlineStore from a dict
google_cloud_aiplatform_v1beta1_feature_online_store_from_dict = GoogleCloudAiplatformV1beta1FeatureOnlineStore.from_dict(google_cloud_aiplatform_v1beta1_feature_online_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


