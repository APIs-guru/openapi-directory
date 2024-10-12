# GoogleCloudApigeeV1PodStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** | Version of the application running in the pod. | [optional] 
**deployment_status** | **str** | Status of the deployment. Valid values include: - &#x60;deployed&#x60;: Successful. - &#x60;error&#x60; : Failed. - &#x60;pending&#x60; : Pod has not yet reported on the deployment. | [optional] 
**deployment_status_time** | **str** | Time the deployment status was reported in milliseconds since epoch. | [optional] 
**deployment_time** | **str** | Time the proxy was deployed in milliseconds since epoch. | [optional] 
**pod_name** | **str** | Name of the pod which is reporting the status. | [optional] 
**pod_status** | **str** | Overall status of the pod (not this specific deployment). Valid values include: - &#x60;active&#x60;: Up to date. - &#x60;stale&#x60; : Recently out of date. Pods that have not reported status in a long time are excluded from the output. | [optional] 
**pod_status_time** | **str** | Time the pod status was reported in milliseconds since epoch. | [optional] 
**status_code** | **str** | Code associated with the deployment status. | [optional] 
**status_code_details** | **str** | Human-readable message associated with the status code. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_pod_status import GoogleCloudApigeeV1PodStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1PodStatus from a JSON string
google_cloud_apigee_v1_pod_status_instance = GoogleCloudApigeeV1PodStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1PodStatus.to_json())

# convert the object into a dict
google_cloud_apigee_v1_pod_status_dict = google_cloud_apigee_v1_pod_status_instance.to_dict()
# create an instance of GoogleCloudApigeeV1PodStatus from a dict
google_cloud_apigee_v1_pod_status_from_dict = GoogleCloudApigeeV1PodStatus.from_dict(google_cloud_apigee_v1_pod_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


