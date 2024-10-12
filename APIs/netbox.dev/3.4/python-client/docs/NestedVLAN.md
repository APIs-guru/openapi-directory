# NestedVLAN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**vid** | **int** |  | 

## Example

```python
from openapi_client.models.nested_vlan import NestedVLAN

# TODO update the JSON string below
json = "{}"
# create an instance of NestedVLAN from a JSON string
nested_vlan_instance = NestedVLAN.from_json(json)
# print the JSON string representation of the object
print(NestedVLAN.to_json())

# convert the object into a dict
nested_vlan_dict = nested_vlan_instance.to_dict()
# create an instance of NestedVLAN from a dict
nested_vlan_from_dict = NestedVLAN.from_dict(nested_vlan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


