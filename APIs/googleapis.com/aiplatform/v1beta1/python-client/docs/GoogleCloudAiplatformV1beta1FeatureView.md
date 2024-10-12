# GoogleCloudAiplatformV1beta1FeatureView

FeatureView is representation of values that the FeatureOnlineStore will serve based on its syncConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_source** | [**GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource**](GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp when this FeatureView was created. | [optional] [readonly] 
**etag** | **str** | Optional. Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**feature_registry_source** | [**GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource**](GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize your FeatureViews. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one FeatureOnlineStore(System labels are excluded).\&quot; System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**name** | **str** | Identifier. Name of the FeatureView. Format: &#x60;projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}&#x60; | [optional] 
**service_account_email** | **str** | Output only. A Service Account unique to this FeatureView. The role bigquery.dataViewer should be granted to this service account to allow Vertex AI Feature Store to sync data to the online store. | [optional] [readonly] 
**service_agent_type** | **str** | Optional. Service agent type used during data sync. By default, the Vertex AI Service Agent is used. When using an IAM Policy to isolate this FeatureView within a project (https://cloud.google.com/vertex-ai/docs/featurestore/latest/resource-policy) a separate service account should be provisioned by setting this field to &#x60;SERVICE_AGENT_TYPE_FEATURE_VIEW&#x60;. This will generate a separate service account to access the BigQuery source table. | [optional] 
**sync_config** | [**GoogleCloudAiplatformV1beta1FeatureViewSyncConfig**](GoogleCloudAiplatformV1beta1FeatureViewSyncConfig.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp when this FeatureView was last updated. | [optional] [readonly] 
**vector_search_config** | [**GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig**](GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_view import GoogleCloudAiplatformV1beta1FeatureView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureView from a JSON string
google_cloud_aiplatform_v1beta1_feature_view_instance = GoogleCloudAiplatformV1beta1FeatureView.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureView.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_view_dict = google_cloud_aiplatform_v1beta1_feature_view_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureView from a dict
google_cloud_aiplatform_v1beta1_feature_view_from_dict = GoogleCloudAiplatformV1beta1FeatureView.from_dict(google_cloud_aiplatform_v1beta1_feature_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


