# GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo

Represent the resources that are children of this Workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | Resource identifier. For a project this represents project_number. | [optional] 
**resource_type** | **str** | Indicates the type of resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_workload_resource_info import GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo from a JSON string
google_cloud_assuredworkloads_v1beta1_workload_resource_info_instance = GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_workload_resource_info_dict = google_cloud_assuredworkloads_v1beta1_workload_resource_info_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo from a dict
google_cloud_assuredworkloads_v1beta1_workload_resource_info_from_dict = GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo.from_dict(google_cloud_assuredworkloads_v1beta1_workload_resource_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


