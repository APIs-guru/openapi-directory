# GoogleCloudApigeeV1ResourceStatus

The status of a resource loaded in the runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **str** | The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig | [optional] 
**revisions** | [**List[GoogleCloudApigeeV1RevisionStatus]**](GoogleCloudApigeeV1RevisionStatus.md) | Revisions of the resource currently deployed in the instance. | [optional] 
**total_replicas** | **int** | The total number of replicas that should have this resource. | [optional] 
**uid** | **str** | The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_resource_status import GoogleCloudApigeeV1ResourceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ResourceStatus from a JSON string
google_cloud_apigee_v1_resource_status_instance = GoogleCloudApigeeV1ResourceStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ResourceStatus.to_json())

# convert the object into a dict
google_cloud_apigee_v1_resource_status_dict = google_cloud_apigee_v1_resource_status_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ResourceStatus from a dict
google_cloud_apigee_v1_resource_status_from_dict = GoogleCloudApigeeV1ResourceStatus.from_dict(google_cloud_apigee_v1_resource_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


