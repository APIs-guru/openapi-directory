# WorkloadIdentityPool

Represents a collection of workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the pool. Cannot exceed 256 characters. | [optional] 
**disabled** | **bool** | Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again. | [optional] 
**display_name** | **str** | A display name for the pool. Cannot exceed 32 characters. | [optional] 
**expire_time** | **str** | Output only. Time after which the workload identity pool will be permanently purged and cannot be recovered. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the pool. | [optional] [readonly] 
**state** | **str** | Output only. The state of the pool. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_identity_pool import WorkloadIdentityPool

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadIdentityPool from a JSON string
workload_identity_pool_instance = WorkloadIdentityPool.from_json(json)
# print the JSON string representation of the object
print(WorkloadIdentityPool.to_json())

# convert the object into a dict
workload_identity_pool_dict = workload_identity_pool_instance.to_dict()
# create an instance of WorkloadIdentityPool from a dict
workload_identity_pool_from_dict = WorkloadIdentityPool.from_dict(workload_identity_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


