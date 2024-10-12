# DeviceRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 
**vm_role** | **bool** | Virtual machines may be assigned to this role | [optional] 

## Example

```python
from openapi_client.models.device_role import DeviceRole

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceRole from a JSON string
device_role_instance = DeviceRole.from_json(json)
# print the JSON string representation of the object
print(DeviceRole.to_json())

# convert the object into a dict
device_role_dict = device_role_instance.to_dict()
# create an instance of DeviceRole from a dict
device_role_from_dict = DeviceRole.from_dict(device_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


