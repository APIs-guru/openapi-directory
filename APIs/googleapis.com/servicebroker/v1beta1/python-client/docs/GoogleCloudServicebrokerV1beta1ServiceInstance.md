# GoogleCloudServicebrokerV1beta1ServiceInstance

Message describing inputs to Provision and Update Service instance requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **Dict[str, object]** | Platform specific contextual information under which the service instance is to be provisioned. This replaces organization_guid and space_guid. But can also contain anything. Currently only used for logging context information. | [optional] 
**create_time** | **str** | Output only. Timestamp for when the instance was created. | [optional] 
**deployment_name** | **str** | Output only. String containing the Deployment Manager deployment name that was created for this instance, | [optional] 
**description** | **str** | To return errors when GetInstance call is done via HTTP to be unified with other methods. | [optional] 
**instance_id** | **str** | The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required. | [optional] 
**organization_guid** | **str** | The platform GUID for the organization under which the service is to be provisioned. Required. | [optional] 
**parameters** | **Dict[str, object]** | Configuration options for the service instance. Parameters is JSON object serialized to string. | [optional] 
**plan_id** | **str** | The ID of the plan. See &#x60;Service&#x60; and &#x60;Plan&#x60; resources for details. Maximum length is 64, GUID recommended. Required. | [optional] 
**previous_values** | **Dict[str, object]** | Used only in UpdateServiceInstance request to optionally specify previous fields. | [optional] 
**resource_name** | **str** | Output only. The resource name of the instance, e.g. projects/project_id/brokers/broker_id/service_instances/instance_id | [optional] 
**service_id** | **str** | The id of the service. Must be a valid identifier of a service contained in the list from a &#x60;ListServices()&#x60; call. Maximum length is 64, GUID recommended. Required. | [optional] 
**space_guid** | **str** | The identifier for the project space within the platform organization. Required. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1beta1_service_instance import GoogleCloudServicebrokerV1beta1ServiceInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1beta1ServiceInstance from a JSON string
google_cloud_servicebroker_v1beta1_service_instance_instance = GoogleCloudServicebrokerV1beta1ServiceInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1beta1ServiceInstance.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1beta1_service_instance_dict = google_cloud_servicebroker_v1beta1_service_instance_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1beta1ServiceInstance from a dict
google_cloud_servicebroker_v1beta1_service_instance_from_dict = GoogleCloudServicebrokerV1beta1ServiceInstance.from_dict(google_cloud_servicebroker_v1beta1_service_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


