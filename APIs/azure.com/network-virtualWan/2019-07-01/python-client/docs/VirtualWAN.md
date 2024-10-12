# VirtualWAN

VirtualWAN Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**VirtualWanProperties**](VirtualWanProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_wan import VirtualWAN

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualWAN from a JSON string
virtual_wan_instance = VirtualWAN.from_json(json)
# print the JSON string representation of the object
print(VirtualWAN.to_json())

# convert the object into a dict
virtual_wan_dict = virtual_wan_instance.to_dict()
# create an instance of VirtualWAN from a dict
virtual_wan_from_dict = VirtualWAN.from_dict(virtual_wan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


