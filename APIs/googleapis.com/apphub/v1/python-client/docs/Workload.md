# Workload

Workload is an App Hub data model that contains a discovered workload, which represents a binary deployment (such as managed instance groups (MIGs) and GKE deployments) that performs the smallest logical subset of business functionality.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Attributes**](Attributes.md) |  | [optional] 
**create_time** | **str** | Output only. Create time. | [optional] [readonly] 
**description** | **str** | Optional. User-defined description of a Workload. Can have a maximum length of 2048 characters. | [optional] 
**discovered_workload** | **str** | Required. Immutable. The resource name of the original discovered workload. | [optional] 
**display_name** | **str** | Optional. User-defined name for the Workload. Can have a maximum length of 63 characters. | [optional] 
**name** | **str** | Identifier. The resource name of the Workload. Format: \&quot;projects/{host-project-id}/locations/{location}/applications/{application-id}/workloads/{workload-id}\&quot; | [optional] 
**state** | **str** | Output only. Workload state. | [optional] [readonly] 
**uid** | **str** | Output only. A universally unique identifier (UUID) for the &#x60;Workload&#x60; in the UUID4 format. | [optional] [readonly] 
**update_time** | **str** | Output only. Update time. | [optional] [readonly] 
**workload_properties** | [**WorkloadProperties**](WorkloadProperties.md) |  | [optional] 
**workload_reference** | [**WorkloadReference**](WorkloadReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.workload import Workload

# TODO update the JSON string below
json = "{}"
# create an instance of Workload from a JSON string
workload_instance = Workload.from_json(json)
# print the JSON string representation of the object
print(Workload.to_json())

# convert the object into a dict
workload_dict = workload_instance.to_dict()
# create an instance of Workload from a dict
workload_from_dict = Workload.from_dict(workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


