# WritableVRF


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**enforce_unique** | **bool** | Prevent duplicate prefixes/IP addresses within this VRF | [optional] 
**export_targets** | **List[int]** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**import_targets** | **List[int]** |  | [optional] 
**ipaddress_count** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**prefix_count** | **int** |  | [optional] [readonly] 
**rd** | **str** | Unique route distinguisher (as defined in RFC 4364) | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_vrf import WritableVRF

# TODO update the JSON string below
json = "{}"
# create an instance of WritableVRF from a JSON string
writable_vrf_instance = WritableVRF.from_json(json)
# print the JSON string representation of the object
print(WritableVRF.to_json())

# convert the object into a dict
writable_vrf_dict = writable_vrf_instance.to_dict()
# create an instance of WritableVRF from a dict
writable_vrf_from_dict = WritableVRF.from_dict(writable_vrf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


