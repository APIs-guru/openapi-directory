# GoogleCloudApigeeV1RuntimeConfig

Runtime configuration for the organization. Response for GetRuntimeConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_bucket** | **str** | Cloud Storage bucket used for uploading Analytics records. | [optional] 
**name** | **str** | Name of the resource in the following format: &#x60;organizations/{org}/runtimeConfig&#x60;. | [optional] 
**tenant_project_id** | **str** | Output only. Tenant project ID associated with the Apigee organization. The tenant project is used to host Google-managed resources that are dedicated to this Apigee organization. Clients have limited access to resources within the tenant project used to support Apigee runtime instances. Access to the tenant project is managed using SetSyncAuthorization. It can be empty if the tenant project hasn&#39;t been created yet. | [optional] [readonly] 
**trace_bucket** | **str** | Cloud Storage bucket used for uploading Trace records. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_runtime_config import GoogleCloudApigeeV1RuntimeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RuntimeConfig from a JSON string
google_cloud_apigee_v1_runtime_config_instance = GoogleCloudApigeeV1RuntimeConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RuntimeConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_runtime_config_dict = google_cloud_apigee_v1_runtime_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RuntimeConfig from a dict
google_cloud_apigee_v1_runtime_config_from_dict = GoogleCloudApigeeV1RuntimeConfig.from_dict(google_cloud_apigee_v1_runtime_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


