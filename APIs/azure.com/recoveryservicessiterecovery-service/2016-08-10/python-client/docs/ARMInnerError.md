# ARMInnerError

ARM internal error class for providing additional debug data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_id** | **str** | Gets cloud Id in exception. | [optional] 
**container_id** | **str** | Gets container Id of the caller. | [optional] 
**fabric_id** | **str** | Gets Fabric Id. | [optional] 
**h_v_cluster_id** | **str** | Gets hyperV cluster Id. | [optional] 
**h_v_host_id** | **str** | Gets hyperV host ID. | [optional] 
**live_id** | **str** | Gets Live Id of the caller. | [optional] 
**method_status** | [**MethodCallStatus**](MethodCallStatus.md) |  | [optional] 
**network_id** | **str** | Gets network Id. | [optional] 
**resource_id** | **str** | Gets resource id used in the call. | [optional] 
**resource_name** | **str** | Gets caller resource name. | [optional] 
**serialized_srs_log_context** | **str** | Gets serialized SRS log context. | [optional] 
**source** | **str** | Gets exception source. | [optional] 
**subscription_id** | **str** | Gets subscription Id. | [optional] 
**trace** | **str** | Gets complete stack trace of the exception. | [optional] 
**vm_id** | **str** | Gets Vm Id. | [optional] 

## Example

```python
from openapi_client.models.arm_inner_error import ARMInnerError

# TODO update the JSON string below
json = "{}"
# create an instance of ARMInnerError from a JSON string
arm_inner_error_instance = ARMInnerError.from_json(json)
# print the JSON string representation of the object
print(ARMInnerError.to_json())

# convert the object into a dict
arm_inner_error_dict = arm_inner_error_instance.to_dict()
# create an instance of ARMInnerError from a dict
arm_inner_error_from_dict = ARMInnerError.from_dict(arm_inner_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


