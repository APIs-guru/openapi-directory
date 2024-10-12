# AzureWorkloadRestoreRequest

AzureWorkload-specific restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_bag** | **Dict[str, str]** | Workload specific property bag. | [optional] 
**recovery_mode** | **str** | Defines whether the current recovery mode is file restore or database restore | [optional] 
**recovery_type** | **str** | Type of this recovery. | [optional] 
**source_resource_id** | **str** | Fully qualified ARM ID of the VM on which workload that was running is being recovered. | [optional] 
**target_info** | [**TargetRestoreInfo**](TargetRestoreInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_workload_restore_request import AzureWorkloadRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadRestoreRequest from a JSON string
azure_workload_restore_request_instance = AzureWorkloadRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadRestoreRequest.to_json())

# convert the object into a dict
azure_workload_restore_request_dict = azure_workload_restore_request_instance.to_dict()
# create an instance of AzureWorkloadRestoreRequest from a dict
azure_workload_restore_request_from_dict = AzureWorkloadRestoreRequest.from_dict(azure_workload_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


