# WritablePlatform


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**manufacturer** | **int** | Optionally limit this platform to devices of a certain manufacturer | [optional] 
**name** | **str** |  | 
**napalm_args** | **object** | Additional arguments to pass when initiating the NAPALM driver (JSON format) | [optional] 
**napalm_driver** | **str** | The name of the NAPALM driver to use when interacting with devices | [optional] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_platform import WritablePlatform

# TODO update the JSON string below
json = "{}"
# create an instance of WritablePlatform from a JSON string
writable_platform_instance = WritablePlatform.from_json(json)
# print the JSON string representation of the object
print(WritablePlatform.to_json())

# convert the object into a dict
writable_platform_dict = writable_platform_instance.to_dict()
# create an instance of WritablePlatform from a dict
writable_platform_from_dict = WritablePlatform.from_dict(writable_platform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


