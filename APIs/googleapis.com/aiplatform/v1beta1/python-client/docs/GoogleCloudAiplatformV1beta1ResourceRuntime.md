# GoogleCloudAiplatformV1beta1ResourceRuntime

Persistent Cluster runtime information as output

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_uris** | **Dict[str, str]** | Output only. URIs for user to connect to the Cluster. Example: { \&quot;RAY_HEAD_NODE_INTERNAL_IP\&quot;: \&quot;head-node-IP:10001\&quot; \&quot;RAY_DASHBOARD_URI\&quot;: \&quot;ray-dashboard-address:8888\&quot; } | [optional] [readonly] 
**notebook_runtime_template** | **str** | Output only. The resource name of NotebookRuntimeTemplate for the RoV Persistent Cluster The NotebokRuntimeTemplate is created in the same VPC (if set), and with the same Ray and Python version as the Persistent Cluster. Example: \&quot;projects/1000/locations/us-central1/notebookRuntimeTemplates/abc123\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_resource_runtime import GoogleCloudAiplatformV1beta1ResourceRuntime

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ResourceRuntime from a JSON string
google_cloud_aiplatform_v1beta1_resource_runtime_instance = GoogleCloudAiplatformV1beta1ResourceRuntime.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ResourceRuntime.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_resource_runtime_dict = google_cloud_aiplatform_v1beta1_resource_runtime_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ResourceRuntime from a dict
google_cloud_aiplatform_v1beta1_resource_runtime_from_dict = GoogleCloudAiplatformV1beta1ResourceRuntime.from_dict(google_cloud_aiplatform_v1beta1_resource_runtime_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


