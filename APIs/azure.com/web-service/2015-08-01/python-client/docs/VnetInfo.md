# VnetInfo

VNETInfo contract. This contract is public and is a stripped down version of VNETInfoInternal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.vnet_info import VnetInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VnetInfo from a JSON string
vnet_info_instance = VnetInfo.from_json(json)
# print the JSON string representation of the object
print(VnetInfo.to_json())

# convert the object into a dict
vnet_info_dict = vnet_info_instance.to_dict()
# create an instance of VnetInfo from a dict
vnet_info_from_dict = VnetInfo.from_dict(vnet_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


