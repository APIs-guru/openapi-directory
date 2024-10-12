# NestedDeviceRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_device_role import NestedDeviceRole

# TODO update the JSON string below
json = "{}"
# create an instance of NestedDeviceRole from a JSON string
nested_device_role_instance = NestedDeviceRole.from_json(json)
# print the JSON string representation of the object
print(NestedDeviceRole.to_json())

# convert the object into a dict
nested_device_role_dict = nested_device_role_instance.to_dict()
# create an instance of NestedDeviceRole from a dict
nested_device_role_from_dict = NestedDeviceRole.from_dict(nested_device_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


