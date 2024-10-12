# EnrollVmwareNodePoolRequest

Message for enrolling a VMware node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vmware_node_pool_id** | **str** | The target node pool id to be enrolled. | [optional] 

## Example

```python
from openapi_client.models.enroll_vmware_node_pool_request import EnrollVmwareNodePoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollVmwareNodePoolRequest from a JSON string
enroll_vmware_node_pool_request_instance = EnrollVmwareNodePoolRequest.from_json(json)
# print the JSON string representation of the object
print(EnrollVmwareNodePoolRequest.to_json())

# convert the object into a dict
enroll_vmware_node_pool_request_dict = enroll_vmware_node_pool_request_instance.to_dict()
# create an instance of EnrollVmwareNodePoolRequest from a dict
enroll_vmware_node_pool_request_from_dict = EnrollVmwareNodePoolRequest.from_dict(enroll_vmware_node_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


