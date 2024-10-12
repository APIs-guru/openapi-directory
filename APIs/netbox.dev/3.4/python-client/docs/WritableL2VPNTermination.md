# WritableL2VPNTermination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_object** | **object** |  | [optional] [readonly] 
**assigned_object_id** | **int** |  | 
**assigned_object_type** | **str** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn** | **int** |  | 
**last_updated** | **datetime** |  | [optional] [readonly] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_l2_vpn_termination import WritableL2VPNTermination

# TODO update the JSON string below
json = "{}"
# create an instance of WritableL2VPNTermination from a JSON string
writable_l2_vpn_termination_instance = WritableL2VPNTermination.from_json(json)
# print the JSON string representation of the object
print(WritableL2VPNTermination.to_json())

# convert the object into a dict
writable_l2_vpn_termination_dict = writable_l2_vpn_termination_instance.to_dict()
# create an instance of WritableL2VPNTermination from a dict
writable_l2_vpn_termination_from_dict = WritableL2VPNTermination.from_dict(writable_l2_vpn_termination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


