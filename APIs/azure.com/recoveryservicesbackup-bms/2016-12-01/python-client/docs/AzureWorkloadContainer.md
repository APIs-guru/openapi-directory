# AzureWorkloadContainer

Container for the workloads running inside Azure Compute or Classic Compute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_info** | [**AzureWorkloadContainerExtendedInfo**](AzureWorkloadContainerExtendedInfo.md) |  | [optional] 
**last_updated_time** | **datetime** | Time stamp when this container was updated. | [optional] 
**operation_type** | **str** | Re-Do Operation | [optional] 
**source_resource_id** | **str** | ARM ID of the virtual machine represented by this Azure Workload Container | [optional] 
**workload_type** | **str** | Workload type for which registration was sent. | [optional] 

## Example

```python
from openapi_client.models.azure_workload_container import AzureWorkloadContainer

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadContainer from a JSON string
azure_workload_container_instance = AzureWorkloadContainer.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadContainer.to_json())

# convert the object into a dict
azure_workload_container_dict = azure_workload_container_instance.to_dict()
# create an instance of AzureWorkloadContainer from a dict
azure_workload_container_from_dict = AzureWorkloadContainer.from_dict(azure_workload_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


