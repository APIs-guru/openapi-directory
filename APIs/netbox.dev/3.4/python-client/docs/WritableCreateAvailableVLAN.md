# WritableCreateAvailableVLAN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**role** | **int** |  | [optional] 
**site** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_create_available_vlan import WritableCreateAvailableVLAN

# TODO update the JSON string below
json = "{}"
# create an instance of WritableCreateAvailableVLAN from a JSON string
writable_create_available_vlan_instance = WritableCreateAvailableVLAN.from_json(json)
# print the JSON string representation of the object
print(WritableCreateAvailableVLAN.to_json())

# convert the object into a dict
writable_create_available_vlan_dict = writable_create_available_vlan_instance.to_dict()
# create an instance of WritableCreateAvailableVLAN from a dict
writable_create_available_vlan_from_dict = WritableCreateAvailableVLAN.from_dict(writable_create_available_vlan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


