# AvailableVLAN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**NestedVLANGroup**](NestedVLANGroup.md) |  | [optional] 
**vid** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.available_vlan import AvailableVLAN

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableVLAN from a JSON string
available_vlan_instance = AvailableVLAN.from_json(json)
# print the JSON string representation of the object
print(AvailableVLAN.to_json())

# convert the object into a dict
available_vlan_dict = available_vlan_instance.to_dict()
# create an instance of AvailableVLAN from a dict
available_vlan_from_dict = AvailableVLAN.from_dict(available_vlan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


