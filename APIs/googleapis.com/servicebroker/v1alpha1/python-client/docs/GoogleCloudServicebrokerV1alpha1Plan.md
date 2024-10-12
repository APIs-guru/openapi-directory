# GoogleCloudServicebrokerV1alpha1Plan

Plan message describes a Service Plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindable** | **bool** | Specifies whether instances of the service can be bound to applications. If not specified, &#x60;Service.bindable&#x60; will be presumed. | [optional] 
**description** | **str** | Textual description of the plan. Optional. | [optional] 
**free** | **bool** | Whether the service is free. | [optional] 
**id** | **str** | ID is a globally unique identifier used to uniquely identify the plan. User must make no presumption about the format of this field. | [optional] 
**metadata** | **Dict[str, object]** | A list of metadata for a service offering. Metadata is an arbitrary JSON object. | [optional] 
**name** | **str** | User friendly name of the plan. The name must be globally unique within GCP project. Note, which is different from (\&quot;This must be globally unique within a platform marketplace\&quot;). | [optional] 
**schemas** | **Dict[str, object]** | Schema definitions for service instances and bindings for the plan. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1alpha1_plan import GoogleCloudServicebrokerV1alpha1Plan

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1alpha1Plan from a JSON string
google_cloud_servicebroker_v1alpha1_plan_instance = GoogleCloudServicebrokerV1alpha1Plan.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1alpha1Plan.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1alpha1_plan_dict = google_cloud_servicebroker_v1alpha1_plan_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1alpha1Plan from a dict
google_cloud_servicebroker_v1alpha1_plan_from_dict = GoogleCloudServicebrokerV1alpha1Plan.from_dict(google_cloud_servicebroker_v1alpha1_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


