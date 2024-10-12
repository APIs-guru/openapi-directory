# DiscoveredWorkload

DiscoveredWorkload is a binary deployment (such as managed instance groups (MIGs) and GKE deployments) that performs the smallest logical subset of business functionality. A discovered workload can be registered to an App Hub Workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Identifier. The resource name of the discovered workload. Format: \&quot;projects/{host-project-id}/locations/{location}/discoveredWorkloads/{uuid}\&quot; | [optional] 
**workload_properties** | [**WorkloadProperties**](WorkloadProperties.md) |  | [optional] 
**workload_reference** | [**WorkloadReference**](WorkloadReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.discovered_workload import DiscoveredWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredWorkload from a JSON string
discovered_workload_instance = DiscoveredWorkload.from_json(json)
# print the JSON string representation of the object
print(DiscoveredWorkload.to_json())

# convert the object into a dict
discovered_workload_dict = discovered_workload_instance.to_dict()
# create an instance of DiscoveredWorkload from a dict
discovered_workload_from_dict = DiscoveredWorkload.from_dict(discovered_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


