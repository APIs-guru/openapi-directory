# WritableL2VPN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**export_targets** | **List[int]** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**identifier** | **int** |  | [optional] 
**import_targets** | **List[int]** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**type** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_l2_vpn import WritableL2VPN

# TODO update the JSON string below
json = "{}"
# create an instance of WritableL2VPN from a JSON string
writable_l2_vpn_instance = WritableL2VPN.from_json(json)
# print the JSON string representation of the object
print(WritableL2VPN.to_json())

# convert the object into a dict
writable_l2_vpn_dict = writable_l2_vpn_instance.to_dict()
# create an instance of WritableL2VPN from a dict
writable_l2_vpn_from_dict = WritableL2VPN.from_dict(writable_l2_vpn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


