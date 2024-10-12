# GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings

Represent the custom settings for the resources to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | User-assigned resource display name. If not empty it will be used to create a resource with the specified name. | [optional] 
**resource_id** | **str** | Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don&#39;t set this value as folder_id is assigned by Google. | [optional] 
**resource_type** | **str** | Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_workload_resource_settings import GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings from a JSON string
google_cloud_assuredworkloads_v1beta1_workload_resource_settings_instance = GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_workload_resource_settings_dict = google_cloud_assuredworkloads_v1beta1_workload_resource_settings_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings from a dict
google_cloud_assuredworkloads_v1beta1_workload_resource_settings_from_dict = GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings.from_dict(google_cloud_assuredworkloads_v1beta1_workload_resource_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


